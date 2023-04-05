import { QueryResult } from "pg";
import { incompatibilityError } from "../errors/auth-errors";
import { loginCredentials } from "../protocols";
import { authRepository } from "../repositorys/auth-repository";
import bcrypt from "bcrypt";

async function login(credentials: loginCredentials) {
  try {
    const result: QueryResult<loginCredentials> =
      await authRepository.checkIfUserExist(credentials.email);
    if (result.rowCount !== 0) {
      const passwordIsCorrect = bcrypt.compareSync(
        credentials.password,
        result.rows[0].password
      );
      if (!passwordIsCorrect) {
        throw incompatibilityError();
      }
    } else {
      throw incompatibilityError();
    }
  } catch (error) {
    console.log(error);
  }
}

export const authServices = {
  login,
};
