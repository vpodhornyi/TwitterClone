import tweet from '../models/Tweet.js';

class TweetRepository {
  #Tweet;

  constructor(sequelize) {
    this.#Tweet = tweet(sequelize);
  }

  create = async (tweetData) => {
    try {
      const id = await this.#Tweet.create(tweetData)

      return id;
    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }
}

export default TweetRepository;
