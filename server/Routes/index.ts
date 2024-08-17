import { Application } from "express";
import authRoutes from "./Auth.routes";
import pokemonRoutes from "./Pokemon.routes";

export default (app: Application): void => {
  app.use("/auth", authRoutes);
  app.use("/pokemon", pokemonRoutes);
};
