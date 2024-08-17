import { body, ValidationChain } from "express-validator";

const DtoCreatePokemon = (): ValidationChain[] => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be a string"),
    body("type")
      .notEmpty()
      .withMessage("Type is required")
      .isString()
      .withMessage("Type must be a string"),
    body("amount")
      .notEmpty()
      .withMessage("Amount is required")
      .isNumeric()
      .withMessage("Amount must be a number"),
    body("damage")
      .notEmpty()
      .withMessage("Damage is required")
      .isNumeric()
      .withMessage("Damage must be a number"),
    body("baseAttack1")
      .notEmpty()
      .withMessage("BaseAttack1 is required")
      .isString()
      .withMessage("BaseAttack1 must be a string"),
    body("baseAttack2")
      .notEmpty()
      .withMessage("BaseAttack2 is required")
      .isString()
      .withMessage("BaseAttack2 must be a string"),
    body("state")
      .notEmpty()
      .withMessage("State is required")
      .isBoolean()
      .withMessage("State must be a boolean"),
    body("img")
      .notEmpty()
      .withMessage("Image is required")
      .isString()
      .withMessage("Image must be a string"),
    body("user")
      .notEmpty()
      .withMessage("User is required")
      .isString()
      .withMessage("User must be a string"),
  ];
};

export default DtoCreatePokemon;
