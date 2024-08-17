import config from "./config";
import { Express } from "express";

const { PORT, HOST, APP_NAME } = config;
const main = (app: Express) => {
  //liste port express
  app.listen(PORT, () => {
    console.log(`App listening on htpp://${HOST}:${config.PORT}/${APP_NAME} `);
  });
};

export default main;
