import { prisma } from "../database/db";

function checkIfUserExist(email: string) {
  return prisma.users.findFirst({ where: { email: email } });
}

function insertOneUser(email: string, password: string) {
  return prisma.users.create({ data: { email, password } });
}

function saveSupaId(id: string, email: string) {
  return prisma.users.update({ where: { email: email }, data: { supaId: id } });
}
export const authRepository = {
  checkIfUserExist,
  insertOneUser,
  saveSupaId,
};
