import express from "express";
import morgan from "morgan";
import cors from "cors";
import main from "./main";

//middlewares

import handleErrors from "./Middlewares/HandlerErrors.middleware";

//bd mongoose
import initDbMongo from "./moongose";
//functions and vars

import config from "./config";
import routes from "./Routes";
//module express
const app = express();

//module morgan
app.use(morgan(config.MORGAN_LOG_LEVEL));
//module cors
app.use(cors());
//module lector json
app.use(express.json());
//module lector body
app.use(express.urlencoded({ extended: false }));

//initDbMongo
initDbMongo.getInstance();
//routes
routes(app);

//errors
app.use(handleErrors);

//servidor http
main(app);

export default app;

//observer,decorador,nyección de Dependencias
