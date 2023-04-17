import { QueryResult } from "pg";
import {
  incompatibilityError,
  userAlreadyExist,
} from "../errors/auth-errors";
import { Registration, loginCredentials, userType } from "../protocols";
import { authRepository } from "../repositorys/auth-repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
async function login(credentials: loginCredentials) {
  try {
    const result: QueryResult<userType> = await authRepository.checkIfUserExist(
      credentials.email
    );
    if (result.rowCount !== 0) {
      const passwordIsCorrect = bcrypt.compareSync(
        credentials.password,
        result.rows[0].password
      );
      if (!passwordIsCorrect) {
        throw incompatibilityError();
      }
      let userId = result.rows[0].id;
      let secretKey = process.env.JWT_SECRET_KEY;

      return jwt.sign({ userId }, secretKey);
    } else {
      throw incompatibilityError();
    }
  } catch (error) {
    throw error;
  }
}

async function registration(credentials: Registration) {
  try {
    const result: QueryResult<userType> = await authRepository.checkIfUserExist(
      credentials.email
    );
    if (result.rowCount !== 0) {
      throw userAlreadyExist();
    }
    const hashedPassword = bcrypt.hashSync(credentials.password, 10);
    await authRepository.insertOneUser(credentials.email, hashedPassword);
  } catch (error) {
    throw error;
  }
}

export const authServices = {
  login,
  registration,
};
