import mongoose, { Model } from "mongoose";
import UserModel from "./User.model";
import { IPokemon } from "./TypesModels";
const Schema = mongoose.Schema;

const PokemonSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },

    type: {
      type: String,
      require: true,
      trim: true,
    },
    amount: {
      type: Number,
      require: true,
      trim: true,
    },
    damage: {
      type: Number,
      require: true,
      trim: true,
    },
    baseAttack1: {
      type: String,
      require: true,
      trim: true,
    },
    baseAttack2: {
      type: String,
      trim: true,
    },
    state: {
      type: Boolean,
    },
    img: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
class PokemonModel {
  public model: Model<IPokemon>;
  constructor() {
    this.model = mongoose.model<IPokemon>("Pokemon", PokemonSchema);
  }
}

export default PokemonModel;
