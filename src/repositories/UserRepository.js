import user from '../models/User.js';

class UserRepository {
  #User;

  constructor(sequelize) {
    this.#User = user(sequelize);
  }
}

export default UserRepository;
