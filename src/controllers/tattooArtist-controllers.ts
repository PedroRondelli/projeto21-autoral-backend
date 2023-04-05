import { Request, Response } from "express";
import { authServices } from "../service/login-service";
import { loginCredentials } from "../protocols";

function signin(req: Request, res: Response) {
  const credentials = req.body as loginCredentials;

  try {
    authServices.login(credentials);
    res.send(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export const tattoArtistControllers = {
  signin,
};
