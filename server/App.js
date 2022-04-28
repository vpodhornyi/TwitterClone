import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import Router from "./src/router/Router.js";
import SequelizeClient from "./db/SequelizeClient.js";
import Model from './src/models/Model.js';

export const APP_URL = '/app/v1';
global.isTest = process.env.NODE_ENV === 'test';

class App {
  constructor() {
    this._app = express();
    this.PORT = isTest ? process.env.PORT_TEST : process.env.PORT;
    this._sequelize = new SequelizeClient().sequelize;
    this._models = new Model(this._sequelize).models
    this.router = new Router(express.Router(), this._models).router;
    this.appUse();
  }

  appUse() {
    this._app.use(express.json());
    this._app.use(cookieParser());
    this._app.use(cors());
    this._app.use(morgan('combined'));
    this._app.use(APP_URL, this.router);
  }

  get app() {
    return this._app;
  }

  get sequelize() {
    return this._sequelize;
  }

  get models() {
    return this._models;
  }

  start() {
    try {
      this._app.listen(this.PORT, () => console.log(`server run on port: ${this.PORT}`));
      this._sequelize.sync(isTest && {force: true});

    } catch (e) {
      console.log(`server start error: ${e}`);
    }
  }
}

export default App;
