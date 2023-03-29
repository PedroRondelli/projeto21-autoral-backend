import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
var app = express();
app.use(express.json()).use(cors());
app.listen(process.env.PORT, function () {
    return console.log("Listen on port ".concat(process.env.PORT));
});
