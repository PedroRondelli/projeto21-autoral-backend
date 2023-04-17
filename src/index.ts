import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tattooArtistRouters from "./routers/tattooArtist-routers.js";

dotenv.config();
const app = express();
app.use(express.json()).use(cors()).use("/tattoArtist", tattooArtistRouters);

app.listen(process.env.PORT, () =>
  console.log(`Listen on port ${process.env.PORT}`)
);

export default app;
