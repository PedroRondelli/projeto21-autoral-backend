import { connectionDB, prisma } from "../database/db";
import { loginCredentials } from "../protocols";

function checkIfUserExist(email: string) {
  return prisma.users.findFirst({ where: { email: email } });
}

function insertOneUser(email: string, password: string) {
  return prisma.users.create({ data: { email, password } });
}

export const authRepository = {
  checkIfUserExist,
  insertOneUser,
};
