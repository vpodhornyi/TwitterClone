import UserRepository from "../repositories/UserRepository.js";

class UserService {
  #UserRepository;

  constructor(sequelize) {
    this.#UserRepository = new UserRepository(sequelize);
  }
}

export default UserService;
