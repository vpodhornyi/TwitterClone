import TweetRepository from "../repositories/TweetRepository.js";

class UserService {
  #TweetRepository;

  constructor(sequelize) {
    this.#TweetRepository = new TweetRepository(sequelize);
  }
}

export default UserService;
