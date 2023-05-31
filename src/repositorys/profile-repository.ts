import { prisma } from "../database/db";
import { Profile } from "../protocols";

function editProfile(profile: Profile, verified: any) {
  const { userId } = verified;
  return prisma.profile.create({
    data: {
      name: profile.name,
      nickname: profile.nickname,
      description: profile.about,
      specialties: profile.specialties,
      thank: profile.thank,
      userId: userId,
    },
  });
}

function checkIfProfileExist(verified: any) {
  const { userId } = verified;

  return prisma.profile.findFirst({ where: { userId } });
}

function updateProfile(profile: Profile, verified: any) {
  const { userId } = verified;
  
  return prisma.profile.updateMany({
    where: { userId },
    data: {
      name: profile.name,
      nickname: profile.nickname,
      description: profile.about,
      specialties: profile.specialties,
      thank: profile.thank,
    },
  });
}
export const profileRepository = {
  editProfile,
  checkIfProfileExist,
  updateProfile,
};
