import UserService from '../service/UserService.js';

class UserController {
  constructor(models) {
    this.UserService = new UserService(models);
  }

  /**
   * @desc GET test ping answer
   * @router /user/test/ping
   */
  async getPong(req, res, next) {
    try {
      return await res.status(200).end('pong');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc GET get all users
   * @router /users
   */
  async getUsers(req, res, next) {
    try {
      const answer = await this.UserService.getUsers();

      return res.json({answer});

    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  /**
   * @desc POST user registration data
   * @router /user/registration
   */
  async registration(req, res, next) {
    try {
      const body = req.body;
      const answer = await this.UserService.create(body);

      res.json({answer});

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc POST login user
   * @router /user/login
   */
  login(req, res, next) {
    try {
      res.end('login');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc POST logout user
   * @router /user/logout
   */
  logout(req, res, next) {
    try {
      res.end('logout');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc POST activate user account
   * @router /user/activate
   */
  activate(req, res, next) {
    try {
      res.end('activate');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc GET get refresh token
   * @router /user/refresh
   */
  refresh(req, res, next) {
    try {
      res.end('refresh');

    } catch (err) {
      next(err)
    }
  }
}

export default UserController;
