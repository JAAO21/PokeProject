import mongoose from "mongoose";

import config from "./config";
const { DBM_TYPE, DBM_HOST, PORTM_DB, DBM_NAME } = config;
//patron singleton
class Database {
  private static instance: Database;
  private constructor() {
    this._connect();
  }

  private async _connect(): Promise<void> {
    try {
      const db = await mongoose.connect(
        `${DBM_TYPE}://${DBM_HOST}:${PORTM_DB}/${DBM_NAME}`
      );
      console.log("Db is Connected!", db.connection.name);
    } catch (err) {
      console.error("Failed to connect to the database:", err);
    }
  }
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
export default Database;
