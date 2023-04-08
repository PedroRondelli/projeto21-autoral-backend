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

function insertOneUser(email:string,password:string){
  return connectionDB.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,password])
}

export const authRepository = {
  login,
  checkIfUserExist,
  insertOneUser
};
