import express, {
  Response,
  Request,
  NextFunction,
  RequestHandler,
} from "express";
import { validationResult, query } from "express-validator";

import DtoCreatePokemon from "../Controller/Pokemon/Pokemon.dto";
import {
  GetAllPokemon,
  AmountsGetAllPokemon,
  CreatePokemon,
  DatePokemonAmount,
  DeletePokemon,
  UpdatePokemon,
} from "../Controller/Pokemon/Pokemon.controller";

const router = express.Router();

/**
 * @swagger
 * /pokemon:
 *   get:
 *     summary: Obtiene un listado de todos los pokemons.
 *     description: Retorna una lista con todos los pokemons disponibles.
 *     responses:
 *       200:
 *         description: Lista de pokemons.
 *       500:
 *         description: Not data pokemon in the bd.
 */

router.get("/", GetAllPokemon);

/**
 * @swagger
 * /pokemon/amountsGetAllPokemon:
 *   get:
 *     summary: Obtiene un listado de las cantidades de estado activo,inactivo,tipos y cantidad de pokemon de todos los pokemons.
 *     description: Retorna una lista con todos los pokemons disponibles.
 *     responses:
 *       200:
 *         description: Listado de cantidades pokemons.
 *       500:
 *         description: Not data pokemon in the bd.
 */

router.get("/amountsGetAllPokemon", AmountsGetAllPokemon);

/**
 * @swagger
 * /pokemon/datePokemonAmount:
 *   get:
 *     summary: Obtiene un listado de los meses y cantidades totales de  todos los pokemons disponibles.
 *     responses:
 *       200:
 *         description: Listado de cantidades y fecha en meses de pokemons.
 *       500:
 *         description: Not data pokemon in the bd.
 */

router.get("/datePokemonAmount", DatePokemonAmount);

/**
 * @swagger
 * /pokemon/createPokemon:
 *   post:
 *     summary: Crea un pokemon.
 *     description: Retorna un mensaje confirmando la creación del pokemon.
 *     responses:
 *       200:
 *         description: the pokemon has been created
 *       500:
 *         description: Error creating Pokemon.:error
 */

const validateCreatePokemon: RequestHandler[] = [
  ...DtoCreatePokemon(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }
    next();
  },
];

router.post(
  "/createPokemon",
  validateCreatePokemon,
  (req: Request, res: Response, next: NextFunction) =>
    CreatePokemon(req.body, res, next)
);

/**
 * @swagger
 * /pokemon/updatePokemon/:_id:
 *   put:
 *     summary: Obtiene todos los pokemons.
 *     description: Retorna un mensaje confirmando la actualización del pokemon.
 *     responses:
 *       200:
 *         description:The pokemon was not update because its id ${req._id} was not found.
 *       404:
 *         description:The pokemon was not update because its id ${req._id} was not found
 */

router.put(
  "/updatePokemon/:_id",
  query("_id").notEmpty().escape(),
  (req: Request, res: Response, next: NextFunction) =>
    UpdatePokemon(req, res, next)
);

/**
 * @swagger
 * /pokemon/deletePokemon:
 *   delete:
 *     summary: Elimina un pokemon de acuerdo a su id.
 *     description: Retorna un mensaje confirmando la eliminación del pokemon.
 *     responses:
 *       200:
 *         description: The pokemon was not eliminated because its id ${req._id} was not found.
 *        404:
 *         description:The pokemon was not eliminated because its id ${req._id} was not found
 */
router.delete(
  "/deletePokemon",
  query("_id").notEmpty().escape(),
  (req: Request, res: Response, next: NextFunction) =>
    DeletePokemon(req, res, next)
);

export default router;
