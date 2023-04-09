import { connectionDB } from "../database/db.js";
import { Profile } from "../protocols";

function editProfile(profile: Profile, verified: any) {
  const { userId } = verified;
  return connectionDB.query(
    'INSERT INTO "profileInformations"(name,nickname,description,specialties,thank,"userId") VALUES($1,$2,$3,$4,$5,$6)',
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
