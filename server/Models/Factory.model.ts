import { Model } from "mongoose";
import UserModel from "./User.model";
import PokemonModel from "./Pokemon.model";
import { IUser, IPokemon } from "./TypesModels";
import { Mode } from "fs";
type ModelType = "User" | "Pokemon";

class ModelFactory {
  static createModel(type: "User"): Model<IUser>;
  static createModel(type: "Pokemon"): Model<IPokemon>;
  static createModel(type: ModelType): Model<any> {
    switch (type) {
      case "User":
        return new UserModel().model;
      case "Pokemon":
        return new PokemonModel().model;
      default:
        throw new Error("Unknown model type");
    }
  }
}

export default ModelFactory;
