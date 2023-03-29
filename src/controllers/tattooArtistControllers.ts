import { Request, Response } from "express";

function getAllProfiles(req: Request, res: Response) {
  res.send("I'm here bitch");
}



export const tattoArtistControllers={
    getAllProfiles
}