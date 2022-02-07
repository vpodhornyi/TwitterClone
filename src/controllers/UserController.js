import UserService from '../service/UserService.js';

class UserController {
  #UserService;

  constructor(sequelize) {
    this.#UserService = new UserService(sequelize);
  }

  /**
   * @desc GET test ping answer
   * @router /user/test/ping
   */
  getPong(req, res, next) {
    try {
      res.status(200).end('pong');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc POST user registration data
   * @router /user/registration
   */
  registration = async (req, res, next) => {
    try {
      const body = req.body;

      console.log('this - ', this);
      console.log('body - ', body);
      const answer = await this.#UserService.create(body);

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

  /**
   * @desc GET get all users
   * @router /user/users
   */
  gerUsers(req, res, next) {
    try {
      res.end('users');

    } catch (err) {
      next(err)
    }
  }
}

export default UserController;
