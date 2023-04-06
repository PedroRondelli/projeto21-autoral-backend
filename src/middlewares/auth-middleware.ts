import { Request, Response, NextFunction } from "express";
import { signInSchema } from "../schemas/auth.schemas";

function authLoginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  const validation = signInSchema.validate(body, { abortEarly: false });

  if (validation.error) {
   return res.status(400).send(validation.error.details);
  }

  next();
}

export const authMiddlewares = {
  authLoginMiddleware,
};
