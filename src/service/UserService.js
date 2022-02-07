import UserRepository from "../repositories/UserRepository.js";

class UserService {
  #UserRepository;

  constructor(sequelize) {
    this.#UserRepository = new UserRepository(sequelize);
  }

  create = async (userData) => {
    try {
      console.log('userData - ', userData);
      const answer = await this.#UserRepository.create(userData);

      return answer;

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }
}

export default UserService;
