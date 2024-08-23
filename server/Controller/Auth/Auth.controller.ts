import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { genSalt, hash, compare } from "bcrypt";

import eventManager from "../../Audit/EventManagerInstance";
import jwt from "jsonwebtoken";
import config from "../../config";
import middlewaresNodemailer from "../../Middlewares/Nodemailer.middleware";
import AuthError from "../../Errors/Auth/Auth.error";

import ModelFactory from "../../Models/Factory.model";
import { AuthProps, AuthSigInProps } from "./Type.controllet";

const UserModel = ModelFactory.createModel("User");

const { JWT_APIKEY } = config;

/**
 * Encriptra la contraseña y envia los datos a la función Register
 *
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */
export const AllUSer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

/**
 * Encriptra la contraseña y envia los datos a la función Register
 *
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */
export const SignUp = async (
  req: AuthProps,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      email,
      age,
      gender,
      password,
      IdentificationType,
      identificationNumber,
    } = req;
    const findEmail = await UserModel.find(
      {
        email: email,
      },
      { identificationNumber: identificationNumber }
    );
    if (findEmail.length > 0)
      throw new AuthError("User already exists with this email", 409);
    const hashedPassword = hashPassword(password);
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      age,
      gender,
      password: hashedPassword,
      IdentificationType,
      identificationNumber,
      state: true,
    });

    await newUser.save();
    eventManager.notifyObservers("UserCreated", newUser);
    return res.status(201).send("User created successfully");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

/**
 * Registra un usuario nuevo dentro de la base de datos
 *
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await genSalt(saltRounds);
  return await hash(password, salt);
};

/**
 * Ingresa el usuario con el correo y valida su contraseña con la que esta en la bd
 *
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const SignIn = async (
  req: AuthSigInProps,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req;
    const findEmail = await UserModel.find({ email });

    if (findEmail.length === 0 || !findEmail) {
      return next(
        new AuthError(`THe user with email ${email} not exist in the bd`)
      );
    }
    const accesToken = generateAccesToken(email, findEmail[0].id);
    compare(password, findEmail[0].password)
      .then((result) => {
        if (result) {
          eventManager.notifyObservers("UserLogin", email);
          return res.header("authorization", accesToken).json({
            message: "Autenticated user",
            token: accesToken,
          });
        } else {
          return next(new AuthError("Error authenticating user ", 401));
        }
      })
      .catch((err) => {
        return next(err);
      });
  } catch (err) {
    return next(err);
  }
};

/**
 * Genera el token de utenticacion con la informacion del email y id
 *
 * @param  username- String
 * @param id - String
 */

const generateAccesToken = (username: string, id: string) => {
  const auth = { username, id };
  const token = jwt.sign(auth, JWT_APIKEY, { expiresIn: "1d" });
  return token;
};

/**
 * Verifica que el usuariose encuentre en la base de datos de acuerdo a su email y
 * hace uso de la función de UpdateUser
 *
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const ForgotPassword = async (
  req: AuthSigInProps,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req;
    const saltRounds = 10;
    const findEmail = await UserModel.find({ email });
    if (findEmail.length === 0)
      return next(new AuthError("User not exist in the bd"));

    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(password, salt);
    await UpdateUser(findEmail[0].id, hashedPassword, res, next);
  } catch (error) {
    next(error);
  }
};

/**
 * Actualiza la contraseña del usuario dentro de la base de datos de acuerdo a su id.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

const UpdateUser = async (
  id: string,
  password: string, // Assuming this is a hashed password
  res: Response,
  next: NextFunction
) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      { password }, // Assuming you only want to update the password
      { new: true } // This option returns the updated document
    );

    if (updateUser) {
      eventManager.notifyObservers("UserUpdated", updateUser);
      return res.status(200).send("The password of the user has been updated.");
    } else {
      return next(
        new AuthError(
          `The user does not exist in the database with the id: ${id}`
        )
      );
    }
  } catch (error) {
    console.error("Error updating user: ", error);
    return next(error);
  }
};

/**
 * Actualiza la contraseña de el usuario dentro de la base de datos de acuerdo a su correo.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const VerifyEmil = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //verifica si el usuario existe y envia el correo para recuperer la contraseña
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const email = req.query.email as string | undefined;
      const findEmail = await UserModel.find({ email });
      if (findEmail.length === 0)
        return next(
          new AuthError(`User not exist with email: ${email} in the bd`)
        );

      middlewaresNodemailer(email);
      return res.status(200).send("Send email for recovery password");
    } catch (error) {
      console.error("Error the verify your email :", error);
      return next(error);
    }
  }
};
