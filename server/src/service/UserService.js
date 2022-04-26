import UserRepository from "../repositories/UserRepository.js";

class UserService {
  constructor(models) {
    this.UserRepository = new UserRepository(models);
  }

  async create(userData) {
    try {
      console.log('userData - ', userData);
      return await this.UserRepository.create(userData);

    } catch (err) {
      console.log(err);
      return {err: 1};
    }
  }


  async getUsers() {
    try {
      return await this.UserRepository.getUsers();

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default UserService;
