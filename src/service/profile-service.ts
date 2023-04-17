import { invalidTokenError } from "../errors/auth-errors";
import { Profile } from "../protocols";
import { profileRepository } from "../repositorys/profile-repository";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config();

async function editProfile(profile: Profile, authorization: string) {
  const token = authorization.replace("Bearer ", "");
  const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!verify) {
    throw invalidTokenError();
  }

  try {
    const result = await profileRepository.checkIfProfileExist(verify);
    if (result.rowCount !== 0) {
      await profileRepository.updateProfile(profile, verify);
    } else {
      await profileRepository.editProfile(profile, verify);
    }
  } catch (error) {
    throw error;
  }
}

export const profileService = {
  editProfile,
};
