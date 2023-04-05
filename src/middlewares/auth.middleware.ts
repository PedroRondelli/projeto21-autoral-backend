import { Request, Response } from "express";
import { signInSchema } from "../schemas/auth.schemas";
function authLoginMiddleware(req: Request, res: Response) {
  const { body } = req;
  const validation = signInSchema.validate(body, { abortEarly: false });

  if (validation.error) {
    res.status(400).send(validation.error.details);
  }
}

export const authMiddlewares = {
  authLoginMiddleware,
};
