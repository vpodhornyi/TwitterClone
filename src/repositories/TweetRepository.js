import tweet from '../models/Tweet.js';

class TweetRepository {
  #Tweet;

  constructor(sequelize) {
    this.#Tweet = tweet(sequelize);
  }
}

export default TweetRepository;
