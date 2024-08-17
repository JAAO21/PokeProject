import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Schema } from "mongoose";

import PokemonsError from "../../Errors/Pokemon/Pokemon.error";

import ModelFactory from "../../Models/Factory.model";
const PokemonModel = ModelFactory.createModel("Pokemon");

type PokemonProps = {
  _id: string;
  name: string;
  type: string;
  amount: number;
  damage: number;
  baseAttack1: string;
  baseAttack2?: string;
  state: boolean;
  img?: string;
  user: Schema;
  createdAt: Date;
};

/**
 * Obtiene todos los Pokemons desde la base de datos.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const GetAllPokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const find = await findAllPokemon();
    if (find.length > 0) {
      return res.status(200).json(find);
    } else {
      return next(new PokemonsError("Not data found in the database Pokémon"));
    }
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return next(new PokemonsError("Failed to fetch Pokémon data", 500));
  }
};

/**
 * Obtiene la lista de cantidades de estados activo, inactivo,cantidades y tipos de Pokemons dentro de la base de datos.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const AmountsGetAllPokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isAmount = 0,
    isTypes = 0,
    isStatesActives = 0,
    isStatesInActives = 0;
  const amountsDataEmpty = [
    {
      text: "Cantidad de pokemon",
      value: isAmount,
    },
    {
      text: "Tipos de pokemon",
      value: isTypes,
    },
    {
      text: "Activos",
      value: isStatesActives,
    },
    {
      text: "Inactivos",
      value: isStatesInActives,
    },
  ];
  try {
    const find = await findAllPokemon();
    if (find.length > 0) {
      find.forEach((data) => {
        if (data.amount > 0) {
          isAmount++;
        }
        if (data.type.length > 0) {
          isTypes++;
        }
        if (data.state === true) {
          isStatesActives++;
        } else {
          isStatesInActives++;
        }
      });
      const amountsData = [
        {
          text: "Cantidad de pokemon",
          value: isAmount,
        },
        {
          text: "Tipos de pokemon",
          value: isTypes,
        },
        {
          text: "Activos",
          value: isStatesActives,
        },
        {
          text: "Inactivos",
          value: isStatesInActives,
        },
      ];

      return res.status(200).json(amountsData);
    } else {
      return res.status(200).json(amountsDataEmpty);
    }
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return next(error);
  }
};

/**
 * Obtiene la lista de cantidades de estados activo, inactivo,cantidades y tipos de Pokemons dentro de la base de datos.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

interface DatePokemonAmountprops {
  monthYear?: string;
  isAmount?: number;
  isTypes?: number;
  isStatesActives?: number;
  isStatesInActives?: number;
}

export const DatePokemonAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const find = await findAllPokemon();

    if (find.length > 0) {
      const amountsDataByMonth = new Map<string, DatePokemonAmountprops>();

      find.forEach((data) => {
        const createdAt = new Date(data.createdAt);
        const day = createdAt.getDate() + 1;
        const month = createdAt.getMonth() + 1; // Obtener el mes (1-12)
        const year = createdAt.getFullYear(); // Obtener el año
        const monthYear = `${year}/${month.toString().padStart(2, "0")}/${day}`; // Formatear como YYYY/MM/DD
        const currentData = amountsDataByMonth.get(monthYear) || {
          monthYear,
          isAmount: 0,
          isTypes: 0,
          isStatesActives: 0,
          isStatesInActives: 0,
        };
        currentData.isAmount = (currentData.isAmount ?? 0) + data.amount;
        currentData.isTypes =
          (currentData.isTypes ?? 0) + (data.type.length > 0 ? 1 : 0);
        currentData.isStatesActives =
          (currentData.isStatesActives ?? 0) + (data.state ? 1 : 0);
        currentData.isStatesInActives =
          (currentData.isStatesInActives ?? 0) + (data.state ? 0 : 1);
        amountsDataByMonth.set(monthYear, currentData);
      });
      const data = Array.from(amountsDataByMonth.values()).map((item) => ({
        monthYear: item.monthYear,
        "Cantidad de pokemon": item.isAmount,
        "Tipos de pokemon": item.isTypes,
        Activos: item.isStatesActives,
        Inactivos: item.isStatesInActives,
      }));

      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Crea un Pokemons dentro de la base de datos.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const CreatePokemon = async (
  req: PokemonProps,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPokemon = new PokemonModel(req);
    await newPokemon.save();
    return res.status(201).send("the pokemon has been created");
  } catch (error) {
    console.error("Error creating Pokemon:", error);
    next(error);
  }
};

/**
 * Actualiza un pokemon dentro de la base de datos de acuedo a una id y un body con la estructura de los datos a cambiar.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */
export const UpdatePokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    const id = req.query.id;
    const updatedPokemon = await PokemonModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    return updatedPokemon
      ? res.status(200).send("The pokemon has been Update")
      : next(
          new PokemonsError(
            `The pokemon was not update because its id ${id} was not found`
          )
        );
  } catch (error) {
    console.error("Error updating Pokemon:", error);
    return next(error);
  }
};

/**
 * Elimina un pokemon dentro de la base de datos de acuerdo a una id.
 * @param {import('express').Request} req - Objeto de solicitud de Express
 * @param {import('express').Response} res - Objeto de respuesta de Express
 */

export const DeletePokemon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    const id = req.query.id;
    const deletePokemon = await PokemonModel.findByIdAndDelete({ _id: id });
    return deletePokemon
      ? res.status(200).send("The Pokemon has been eliminated")
      : next(
          new PokemonsError(
            `The pokemon was not eliminated because its id ${id} was not found`
          )
        );
  } catch (error) {
    console.error("Error deleting Pokemon:", error);
    return next(error);
  }
};

/**
 * Obtiene todos los Pokemons desde la base de datos.
 */
async function findAllPokemon() {
  const find = await PokemonModel.find();
  return find;
}
