import req from "../../request.js";

describe('GET /tweets/test/ping', () => {
  test('should respond with a 200 status code', async () => {
    const response = await req('get', '/tweets/test/ping');
    expect(response.statusCode).toBe(200);
  })

  test('should respond text "pong"', async () => {
    const response = await req('get', '/tweets/test/ping');
    expect(response.text).toBe('pong');
  })
})
