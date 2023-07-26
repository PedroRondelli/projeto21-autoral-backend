import { prisma } from "../database/db";

function getAllArtistProfile() {
  return prisma.profile.findMany({});
}

export const cutomerRepository = {
  getAllArtistProfile,
};
