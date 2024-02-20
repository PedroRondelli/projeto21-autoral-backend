import { Router } from "express";

const testeRoutes = Router();

testeRoutes.get("/", (req, res) => {
  res.status(200).send("Conectado");
});

export default testeRoutes;
