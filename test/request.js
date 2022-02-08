import request from 'supertest';
import App, {APP_URL} from "../App.js";

export default async (method, url, send) => await request(new App().app)[method](`${APP_URL}${url}`).send(send);
