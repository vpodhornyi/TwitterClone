import user from '../models/User.js';

class UserRepository {
  #User;

  constructor(sequelize) {
    this.#User = user(sequelize);
  }

  create = async (userData) => {
    try {
      const id = await this.#User.create(userData)

      return id;
    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }
}

export default UserRepository;
