import tweet from '../models/Tweet.js';

class TweetRepository {
  #Tweet;

  constructor(sequelize) {
    this.#Tweet = tweet(sequelize);
  }

  create = async (tweetData) => {
    try {
      return await this.#Tweet.create(tweetData)

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }

  getTweets = async () => {
    try {
      return await this.#Tweet.findAll();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default TweetRepository;
