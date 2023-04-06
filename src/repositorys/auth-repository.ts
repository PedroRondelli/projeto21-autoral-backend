import { connectionDB } from "../database/db.js";
import { loginCredentials } from "../protocols";

function login(credentials: loginCredentials) {
  return connectionDB.query(
    'INSERT INTO "users"(email,password) VALUES($1,$2)',
    [credentials.email, credentials.password]
  );
}

function checkIfUserExist(email: string) {
  return connectionDB.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
}

export const authRepository = {
  login,
  checkIfUserExist,
};
