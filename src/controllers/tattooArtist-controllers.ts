import { Request, Response } from "express";
import { authServices } from "../service/login-service";
import { Profile, Registration, loginCredentials } from "../protocols";
import { profileService } from "../service/profile-service";

async function signin(req: Request, res: Response) {
  const credentials = req.body as loginCredentials;

  try {
    const token = await authServices.login(credentials);

    return res.status(200).send(token);
  } catch (error) {
    if (error.name==="Incompatibility Error") {
      return res.status(401).send(error.message)
    }else {
      return res.status(500).send(error.message)
    }
  }
}


async function signup(req: Request, res: Response) {
  const credentials = req.body as Registration;

  try {
    await authServices.registration(credentials);
    return res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function editProfile(req: Request, res: Response) {
  const profile = req.body as Profile;
  const authorization = req.headers.authorization

  try {
    await profileService.editProfile(profile,authorization)
    return res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const tattoArtistControllers = {
  signin,
  signup,
  editProfile
};
