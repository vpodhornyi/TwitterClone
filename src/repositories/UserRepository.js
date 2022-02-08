import models from '../models/models.js';

class UserRepository {
  #User;
  #Tweet;

  constructor(sequelize) {
    const {User, Tweet} = models(sequelize);
    this.#User = User;
    this.#Tweet = Tweet;
  }

  create = async (userData) => {
    try {
      return await this.#User.create(userData)

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }

  getUsers = async () => {
    try {
      return await this.#User.findAll({
        include: this.#Tweet
      });

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default UserRepository;
