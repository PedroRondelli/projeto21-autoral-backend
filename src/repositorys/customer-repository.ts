import { prisma } from "../database/db";

function getAllArtistProfile() {
  return prisma.profile.findMany({
    include: { users: { select: { supaId:true } } },
  });
}

export const cutomerRepository = {
  getAllArtistProfile,
};
