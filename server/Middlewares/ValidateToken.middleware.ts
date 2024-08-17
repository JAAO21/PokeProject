import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AuthError from "../Errors/Auth/Auth.error";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { JWT_APIKEY } = config;
  const accessToken = req.headers["authorization"] || req.query.accessToken;

  if (!accessToken) throw next(new AuthError("No access token provided"));

  if (typeof accessToken !== "string") {
    throw new AuthError("Invalid access token format");
  }

  const [bearer, token] = accessToken.split(" ");

  if (bearer !== "Bearer" || !token)
    throw new AuthError("Invalid access token format");

  jwt.verify(token, JWT_APIKEY, (err, decode) => {
    if (err) {
      return next(new AuthError("Token verification failed"));
    }
    req.user = decode;
    next();
  });
};

module.exports = validateToken;
