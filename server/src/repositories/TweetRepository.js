class TweetRepository {
  constructor(models) {
    const {User, Tweet} = models;
    this.Tweet = Tweet;
    this.User = User;
  }

  async create(tweetData) {
    try {
      return await this.Tweet.create(tweetData)

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }

  async getTweets() {
    try {
      return await this.Tweet.findAll({
        include: this.User
      });

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default TweetRepository;
