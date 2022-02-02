import request from 'supertest';
import App from "../app.js";

const app = new App().app;

describe('GET /ping', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
  })

  test('should respond text "pong"', async () => {
    const response = await request(app).get('/ping');
    expect(response.text).toBe('pong');
  })
})
