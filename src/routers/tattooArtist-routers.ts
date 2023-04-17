import { Router } from "express";
import { tattoArtistControllers } from "../controllers/tattooArtist-controllers";
import { authMiddlewares } from "../middlewares/auth-middleware";

const tattooArtistRouters = Router();

tattooArtistRouters.post(
  "/login",
  authMiddlewares.authLoginMiddleware,
  tattoArtistControllers.signin
);

tattooArtistRouters.post("/registration",authMiddlewares.authRegistrationMiddleware,tattoArtistControllers.signup)
tattooArtistRouters.post("/profile",tattoArtistControllers.editProfile)

export default tattooArtistRouters;
