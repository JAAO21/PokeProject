import dotenv from "dotenv";

//module dotenv
dotenv.config();
//interface config

interface Config {
  PORT: number;
  HOST: string | undefined;
  APP_NAME: string | undefined;
  JWT_APIKEY: string;
  HTTPS_PORT: number | undefined;
  HTTPS_KEY_PATH: string | undefined;
  HTTPS_CERT_PATH: string | undefined;
  AUTH_USER: string | undefined;
  AUTH_PASSWORD: string | undefined;
  MORGAN_LOG_LEVEL: string;
  DBM_TYPE: string | undefined;
  DBM_HOST: string | undefined;
  PORTM_DB: string | undefined;
  DBM_NAME: string | undefined;
}

// Configuración de la aplicación
const config: Config = {
  PORT: Number(process.env.PORT) || 4550,
  HOST: process.env.HOST,
  APP_NAME: process.env.APP_NAME,
  JWT_APIKEY: process.env.JWT_APIKEY || "default-apikey",
  HTTPS_PORT: process.env.HTTPS_PORT
    ? Number(process.env.HTTPS_PORT)
    : undefined,
  HTTPS_KEY_PATH: process.env.HTTPS_KEY_PATH,
  HTTPS_CERT_PATH: process.env.HTTPS_CERT_PATH,
  AUTH_USER: process.env.AUTH_USER,
  AUTH_PASSWORD: process.env.AUTH_PASSWORD,
  MORGAN_LOG_LEVEL: "dev",
  DBM_TYPE: process.env.DBM_TYPE,
  DBM_HOST: process.env.DBM_HOST,
  PORTM_DB: process.env.PORTM_DB,
  DBM_NAME: process.env.DBM_NAME,
};

export default config;
