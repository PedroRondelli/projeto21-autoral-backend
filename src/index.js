import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());

app.listen(process.env.PORT,() => console.log(`Listen on port ${process.env.PORT}`));
