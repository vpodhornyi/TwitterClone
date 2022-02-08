import models from '../models/models.js';

class TweetRepository {
  #Tweet;
  #User;

  constructor(sequelize) {
    const {User, Tweet} = models(sequelize);
    this.#Tweet = Tweet;
    this.#User = User;
  }

  create = async (tweetData) => {
    try {
      return await this.#Tweet.create(tweetData)

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }

  getTweets = async () => {
    try {
      return await this.#Tweet.findAll({
        include: this.#User
      });

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default TweetRepository;
