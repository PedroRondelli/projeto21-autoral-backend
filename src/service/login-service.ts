import { incompatibilityError, userAlreadyExist } from "../errors/auth-errors";
import { Registration, loginCredentials, userType } from "../protocols";
import { authRepository } from "../repositorys/auth-repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
async function login(credentials: loginCredentials) {
  try {
    const user = await authRepository.checkIfUserExist(credentials.email);
    console.log("termina consulta ao banco")
    if (user) {
      console.log("verifica se a senha está correta")
      const passwordIsCorrect = bcrypt.compareSync(
        credentials.password,
        user.password
      );
      if (!passwordIsCorrect) {
        throw incompatibilityError();
      }
      const userId = user.id;

      return jwt.sign({ userId }, process.env.JWT_SECRET_KEY);
    } else {
      throw incompatibilityError();
    }
  } catch (error) {
    throw error;
  }
}

async function registration(credentials: Registration) {
  try {
    const user = await authRepository.checkIfUserExist(credentials.email);
    if (user) {
      throw userAlreadyExist();
    } else {
      const hashedPassword = bcrypt.hashSync(credentials.password, 10);
      await authRepository.insertOneUser(credentials.email, hashedPassword);
    }
  } catch (error) {
    throw error;
  }
}

async function saveSupaId(id:string,email:string) {
  try {
    await authRepository.saveSupaId(id,email)
  } catch (error) {
    console.log(error)
  }
}

export const authServices = {
  login,
  registration,
  saveSupaId,
};
