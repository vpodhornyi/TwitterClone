import user from '../models/User.js';

class UserRepository {
  #User;

  constructor(sequelize) {
    this.#User = user(sequelize);
  }

  create = async (userData) => {
    try {
      return await this.#User.create(userData)

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }

  getUsers = async () => {
    try {
      return await this.#User.findAll();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default UserRepository;
