import TweetService from "../service/TweetService.js";

class TweetController {
  #tweetService

  constructor(sequelize) {
    this.#tweetService = new TweetService(sequelize);
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

  /**
   * @desc POST user registration data
   * @router /user/registration
   */
  addTweet = async (req, res, next) => {
    try {
      const body = req.body;

      console.log('this - ', this);
      console.log('body - ', body);
      const answer = await this.#tweetService.create(body);

      res.json({answer});

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc GET all tweets
   * @router /tweets
   */
  getTweets = async (req, res, next) => {
    try {
      const answer = await this.#tweetService.getTweets();

      res.json({answer});

    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default TweetController;
