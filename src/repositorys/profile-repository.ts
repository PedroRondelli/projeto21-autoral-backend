import { connectionDB } from "../database/db";
import { Profile } from "../protocols";

function editProfile(profile: Profile, userId: number) {
  return connectionDB.query(
    'INSERT INTO "profileInformations"(name,nickname,description,specialties,thank,"userId") ',
    [
      profile.name,
      profile.nickname,
      profile.about,
      profile.specialties,
      profile.thank,
      userId,
    ]
  );
}

export const profileRepository = {
  editProfile,
};
