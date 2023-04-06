import { Request, Response } from "express";
import { authServices } from "../service/login-service";
import { loginCredentials } from "../protocols";

async function signin(req: Request, res: Response) {
  const credentials = req.body as loginCredentials;

  try {
    const token= await authServices.login(credentials);

    return res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const tattoArtistControllers = {
  signin,
};
