import TweetRepository from "../repositories/TweetRepository.js";

class UserService {
  #TweetRepository;

  constructor(sequelize) {
    this.#TweetRepository = new TweetRepository(sequelize);
  }

  create = async (tweetData) => {
    try {
      console.log('tweetData - ', tweetData);
      const answer = await this.#TweetRepository.create(tweetData);

      return answer;

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }
}

export default UserService;
