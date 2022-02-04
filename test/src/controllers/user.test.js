import req from "../../request.js";

describe('GET /user/test/ping', () => {
  test('should respond with a 200 status code', async () => {
    const response = await req('get', '/user/test/ping');
    expect(response.statusCode).toBe(200);
  })

  test('should respond text "pong"', async () => {
    const response = await req('get', '/user/test/ping');
    expect(response.text).toBe('pong');
  })
})

describe('POST /user/registration', () => {
  test('should respond text "registration"', async () => {
    const response = await req('post', '/user/registration');
    expect(response.text).toBe('registration');
  })
})

describe('POST /user/login', () => {
  test('should respond text "login"', async () => {
    const response = await req('post', '/user/login');
    expect(response.text).toBe('login');
  })
})

describe('POST /user/logout', () => {
  test('should respond text "logout"', async () => {
    const response = await req('post', '/user/logout');
    expect(response.text).toBe('logout');
  })
})

describe('POST /user/activate', () => {
  test('should respond text "activate"', async () => {
    const response = await req('post', '/user/activate');
    expect(response.text).toBe('activate');
  })
})

describe('GET /user/refresh', () => {
  test('should respond text "refresh"', async () => {
    const response = await req('get', '/user/refresh');
    expect(response.text).toBe('refresh');
  })
})

describe('GET /users', () => {
  test('should respond text "users"', async () => {
    const response = await req('get', '/users');
    expect(response.text).toBe('users');
  })
})
