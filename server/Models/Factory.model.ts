import { Model } from "mongoose";
import UserModel from "./User.model";
import PokemonModel from "./Pokemon.model";
import AuditModel from "./Audit.model";
import { IUser, IPokemon, IAudit } from "./TypesModels";

type ModelType = "User" | "Pokemon" | "Audit";

class ModelFactory {
  static createModel(type: "User"): Model<IUser>;
  static createModel(type: "Pokemon"): Model<IPokemon>;
  static createModel(type: "Audit"): Model<IAudit>;
  static createModel(type: ModelType): Model<any> {
    switch (type) {
      case "User":
        return new UserModel().model;
      case "Pokemon":
        return new PokemonModel().model;
      case "Audit":
        return new AuditModel().model;
      default:
        throw new Error("Unknown model type");
    }
  }
}

export default ModelFactory;
