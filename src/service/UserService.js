import UserRepository from "../repositories/UserRepository.js";

class UserService {
  #UserRepository;

  constructor(sequelize) {
    this.#UserRepository = new UserRepository(sequelize);
  }

  create = async (userData) => {
    try {
      console.log('userData - ', userData);
      return await this.#UserRepository.create(userData);

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }


  getUsers = async () => {
    try {
      return await this.#UserRepository.getUsers();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default UserService;
