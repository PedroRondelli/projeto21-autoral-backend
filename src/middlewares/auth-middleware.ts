import { Request, Response, NextFunction } from "express";
import { signInSchema, signUpSchema } from "../schemas/auth.schemas";
import { Registration,loginCredentials } from "../protocols";

function authLoginMiddleware(req: Request, res: Response, next: NextFunction) {
  const  body  = req.body as loginCredentials;
  const validation = signInSchema.validate(body, { abortEarly: false });

  if (validation.error) {
    return res.status(400).send(validation.error.details);
  }

  next();
}

function authRegistrationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const  body  = req.body as Registration;

  const validation = signUpSchema.validate(body, { abortEarly: false });

  if (validation.error) {
    return res.status(400).send(validation.error.details);
  }

  next();
}


export const authMiddlewares = {
  authLoginMiddleware,
  authRegistrationMiddleware,
};
