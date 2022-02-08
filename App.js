import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import getRoutes from "./src/router/routes.js";
import SequelizeClient from "./db/SequelizeClient.js";
import getModels from  './src/models/models.js';

export const APP_URL = '/app/v1';

class App {
  #_app;
  #PORT;
  #sequelize;

  constructor() {
    this.#_app = express();
    this.#PORT = process.env.PORT || 443;
    this.#sequelize = new SequelizeClient().sequelize;
    this.#appUse();
  }

  #appUse() {
    this.#_app.use(express.json());
    this.#_app.use(cookieParser());
    this.#_app.use(cors());
    this.#_app.use(morgan('combined'));
    this.#_app.use(APP_URL, getRoutes(express.Router(), getModels(this.#sequelize)));
  }

  get app() {
    return this.#_app;
  }

  start() {
    try {
      this.#_app.listen(this.#PORT, () => console.log(`server run on port: ${this.#PORT}`));
      this.#sequelize.sync({force: true});

    } catch (e) {
      console.log(`server start error: ${e}`);
    }
  }
}

export default App;
