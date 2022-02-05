import TweetService from "../service/TweetService.js";

class TweetController {

  constructor(sequelize) {
    this.TweetService = new TweetService(sequelize);
  }

  /**
   * @desc GET test ping answer
   * @router /tweet/test/ping
   */
  getPong(req, res, next) {
    try {
      res.status(200).end('pong');

    } catch (err) {
      next(err)
    }
  }
}

export default TweetController;
