import TweetRepository from "../repositories/TweetRepository.js";

class TweetService {
  constructor(models) {
    this.TweetRepository = new TweetRepository(models);
  }

  /**
   * @param tweetData {Object}
   * @return {Promise<*|{err: number}>}
   */
  async create(tweetData) {
    try {
      return await this.TweetRepository.create(tweetData);

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }

  /**
   * @return {Promise<*|{msg, err: number}>}
   */
  async getTweets() {
    try {
      return await this.TweetRepository.getTweets();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default TweetService;
