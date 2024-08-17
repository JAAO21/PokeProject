import { body, ValidationChain } from "express-validator";

export const DtoSignUp = (): ValidationChain[] => {
  return [
    body("firstName")
      .notEmpty()
      .isString()
      .withMessage("FirstName is not empyt or not is to string"),
    body("password")
      .notEmpty()
      .isString()
      .withMessage("Password is not empyt or not is to string"),
    body("email")
      .notEmpty()
      .isString()
      .withMessage("Email is not empyt or not is to string"),
    body("age")
      .notEmpty()
      .isNumeric()
      .withMessage("Age is not empyt or not is to number"),
    body("gender")
      .notEmpty()
      .isString()
      .withMessage("Gender is not empyt or not is to string"),
    body("password")
      .notEmpty()
      .isString()
      .withMessage("Password is not empyt or not is to string"),
    body("IdentificationType")
      .notEmpty()
      .isString()
      .withMessage("IdentificationType is not empyt or no is to string"),
    body("identificationNumber")
      .notEmpty()
      .isNumeric()
      .withMessage("identificationNumber is not empyt or no is to number"),
  ];
};
export const DtoSignIn = () => {
  return [
    body("email")
      .notEmpty()
      .isString()
      .withMessage("Email is not empyt or not is to string"),
    body("password")
      .notEmpty()
      .isString()
      .withMessage("Password is not empyt or not is to string"),
  ];
};
