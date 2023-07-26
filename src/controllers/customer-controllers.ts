import { Request, Response } from "express";
import { customerService } from "../service/customer-service";

async function getAllProfiles(req: Request, res: Response) {
  try {
    const allArtistProfile = customerService.getAllProfiles();
    res.status(200).send(allArtistProfile);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export const customersControllers = {
  getAllProfiles,
};

