import request from 'supertest';
import setDataSql from './dataSql.js';
import App, {APP_URL} from "../App.js";

const APP = new App();

export default async (method, url, send) => {
  await setDataSql(APP);
  return await request(APP.app)[method](`${APP_URL}${url}`).send(send);
}
