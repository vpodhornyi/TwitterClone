import req from "../../request.js";

describe('GET /users/test/ping', () => {
  test('should respond with a 200 status code', async () => {
    const response = await req('get', '/users/test/ping');
    expect(response.statusCode).toBe(200);
  })

  test('should respond text "pong"', async () => {
    const response = await req('get', '/users/test/ping');
    expect(response.text).toBe('pong');
  })
})

describe('POST /users/registration', () => {
  test('should respond text "registration"', async () => {
    const response = await req('post', '/users/registration');
    expect(response.text).toBe('registration');
  })
})

describe('POST /users/login', () => {
  test('should respond text "login"', async () => {
    const response = await req('post', '/users/login');
    expect(response.text).toBe('login');
  })
})

describe('POST /users/logout', () => {
  test('should respond text "logout"', async () => {
    const response = await req('post', '/users/logout');
    expect(response.text).toBe('logout');
  })
})

describe('POST /users/activate', () => {
  test('should respond text "activate"', async () => {
    const response = await req('post', '/users/activate');
    expect(response.text).toBe('activate');
  })
})

describe('GET /users/refresh', () => {
  test('should respond text "refresh"', async () => {
    const response = await req('get', '/users/refresh');
    expect(response.text).toBe('refresh');
  })
})

describe('GET /users', () => {
  test('should respond text "users"', async () => {
    const response = await req('get', '/users');
    expect(response.text).toBe('users');
  })
})
