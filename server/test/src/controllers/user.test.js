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

describe('GET /users', () => {
  test('should respond text "users"', async () => {
    const response = await req('get', '/users');
    const [user] = JSON.parse(response.text).answer;
    expect(user.firstName).toBe('Viktor');
    expect(!!user.id).toBeTruthy();
    expect(!!user.updatedAt).toBeTruthy();
    expect(!!user.createdAt).toBeTruthy();
    expect(!!user.tweets).toBeTruthy();
  })
})

describe('POST /users', () => {
  test('should return object User', async () => {
    const response = await req('post', '/users', {
      "firstName": "Viktor"
    });
    const answer = JSON.parse(response.text).answer;
    expect(answer.firstName).toBe('Viktor');
    expect(!!answer.id).toBeTruthy();
    expect(!!answer.updatedAt).toBeTruthy();
    expect(!!answer.createdAt).toBeTruthy();
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

describe('POST /users/sing-up', () => {
  test('should respond text "sing-up"', async () => {
    const response = await req('post', '/users/sing-up');
    expect(response.text).toBe('sing-up');
  })
})

describe('GET /users/refresh', () => {
  test('should respond text "refresh"', async () => {
    const response = await req('get', '/users/refresh');
    expect(response.text).toBe('refresh');
  })
})
