import TweetRepository from "../repositories/TweetRepository.js";

class TweetService {
  #TweetRepository;

  constructor(models) {
    this.#TweetRepository = new TweetRepository(models);
  }

  /**
   * @param tweetData {Object}
   * @return {Promise<*|{err: number}>}
   */
  create = async (tweetData) => {
    try {
      return await this.#TweetRepository.create(tweetData);

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }

  /**
   * @return {Promise<*|{msg, err: number}>}
   */
  getTweets = async () => {
    try {
      return await this.#TweetRepository.getTweets();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default TweetService;
