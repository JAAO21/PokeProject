import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

import { validationResult, query } from "express-validator";

import { DtoSignIn, DtoSignUp } from "../Controller/Auth/Auth.dto";
import {
  AllUSer,
  SignIn,
  SignUp,
  ForgotPassword,
  VerifyEmil,
} from "../Controller/Auth/Auth.controller";

const router = express.Router();
/**
 * @swagger
 * /auth/allUser:
 *   get:
 *     summary: Trae un listado de usarios.
 *     description: Retorna un listado de usuarios.
 *     responses:
 *       200:
 *         description: retorna un json con los usuarios
 *       500:
 *         description: Error 500
 */
router.get("/allUser", AllUSer);

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Crea un usuario.
 *     description: Retorna un mensaje confirmando la creación del usuario.
 *     responses:
 *       200:
 *         description: User created in the bd
 *       500:
 *         description: Error creating user.:error
 */

const validateAuthSignUp: RequestHandler[] = [
  ...DtoSignUp(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    next();
  },
];

router.post(
  "/signUp",
  validateAuthSignUp,
  (req: Request, res: Response, next: NextFunction) =>
    SignUp(req.body, res, next)
);

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Ingresa un usuario.
 *     description: Retorna un mensaje usuario autenticado y un token.
 *     responses:
 *       200:
 *         description: return json({message:"autenticated user",token})
 *       401:
 *         description: Error authenticating user : error
 */

const validateAuthSignIn: RequestHandler[] = [
  ...DtoSignIn(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    next();
  },
];

router.post(
  "/signIn",
  validateAuthSignIn,
  (req: Request, res: Response, next: NextFunction) =>
    SignIn(req.body, res, next)
);

/**
 * @swagger
 * /auth:
 *   put:
 *     summary: restablece la contraseña del usuario de acuerdo a su email.
 *     description: Retorna un mensaje usuario actualizado.
 *     responses:
 *       200:
 *         description: The password of user has benn update
 *       401:
 *         description: The user no exist in the bd with the id:${id}
 */

router.put(
  "/forgotPassword",
  validateAuthSignIn,
  (req: Request, res: Response, next: NextFunction) =>
    ForgotPassword(req.body, res, next)
);

/**
 * @swagger
 * /pokemon:
 *   post:
 *     summary: Envia un correo al usuario de acuerdo a su email.
 *     description: Retorna un mensaje al usuario diciendo que se envio el correo para restablecer su password.
 *     responses:
 *       200:
 *         description: Send email for recovery password.
 *       404:
 *         description:User not exist with email: ${email} in the bd.
 */

router.post(
  "/sendEmailForgotPassword",
  query("email").notEmpty().escape(),
  (req: Request, res: Response, next: NextFunction) =>
    VerifyEmil(req, res, next)
);

export default router;
