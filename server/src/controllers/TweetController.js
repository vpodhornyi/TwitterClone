import TweetService from "../service/TweetService.js";

class TweetController {
  constructor(models) {
    this.tweetService = new TweetService(models);
  }

  /**
   * @desc GET test ping answer
   * @router /tweet/test/ping
   */
  async getPong(req, res, next) {
    try {
      return await res.status(200).end('pong');

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc POST user registration data
   * @router /user/registration
   */
  async addTweet(req, res, next) {
    try {
      const body = req.body;
      const answer = await this.tweetService.create(body);

      res.json({answer});

    } catch (err) {
      next(err)
    }
  }

  /**
   * @desc GET all tweets
   * @router /tweets
   */
  async getTweets(req, res, next) {
    try {
      const answer = await this.tweetService.getTweets();

      res.json({answer});

    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default TweetController;
