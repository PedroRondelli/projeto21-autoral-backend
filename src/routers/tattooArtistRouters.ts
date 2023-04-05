import { Router } from "express";
import { tattoArtistControllers } from "../controllers/tattooArtistControllers.js";
import { authMiddlewares } from "../middlewares/auth.middleware.js";

const tattooArtistRouters = Router();

tattooArtistRouters.get("/login",authMiddlewares.authLoginMiddleware ,tattoArtistControllers.getAllProfiles);

export default tattooArtistRouters;
