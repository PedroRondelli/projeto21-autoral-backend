import { Router } from "express";
import { tattoArtistControllers } from "../controllers/tattooArtistControllers.js";

const tattooArtistRouters = Router();

tattooArtistRouters.get("/", tattoArtistControllers.getAllProfiles);

export default tattooArtistRouters;
