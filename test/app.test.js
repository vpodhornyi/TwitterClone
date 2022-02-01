import request from 'supertest';
import app from "../app.js";

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
