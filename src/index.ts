import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tattooArtistRouters from "./routers/tattooArtist-routers";
import customerRoutes from "./routers/customer-routers";

dotenv.config();
const app = express();
app
  .use(express.json())
  .use(cors())
  .use("/tattoArtist", tattooArtistRouters)
  .use("/customer", customerRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Listen on port ${process.env.PORT}`)
);

export default app;
