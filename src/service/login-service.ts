import { QueryResult } from "pg";
import { incompatibilityError } from "../errors/auth-errors.js";
import { loginCredentials, userType } from "../protocols";
import { authRepository } from "../repositorys/auth-repository.js";
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
      let userID = result.rows[0].id;
      let secretKey = process.env.JWT_SECRET_KEY;
       
      return jwt.sign({ userID }, secretKey);
    } else {
      throw incompatibilityError();
    }
  } catch (error) {
    throw error
  }
}

export const authServices = {
  login,
};
