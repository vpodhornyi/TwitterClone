import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import getRoutes from "./src/router/routers.js";
import SequelizeClient from "./db/postgres.js";

export const APP_URL = '/app/v1';

class App {
  #_app;
  #PORT;
  #_sequelize;

  constructor() {
    this.#_app = express();
    this.#PORT = process.env.PORT || 443;
    this.#_sequelize = new SequelizeClient().client;
    this.#appUse();
  }

  #appUse() {
    this.#_app.use(express.json());
    this.#_app.use(cookieParser());
    this.#_app.use(cors());
    this.#_app.use(morgan('combined'));
    this.#_app.use(APP_URL, getRoutes(express.Router()))
  }

  get app() {
    return this.#_app;
  }


  get sequelize() {
    return this.#_sequelize;
  }

  start() {
    try {
      this.#_app.listen(this.#PORT, () => console.log(`server run on port: ${this.#PORT}`));
    } catch (e) {
      console.log(`server start error: ${e}`);
    }
  }
}

export default App;
