class UserRepository {
  constructor(models) {
    const {User, Tweet} = models;
    this.User = User;
    this.Tweet = Tweet;
  }

  async create(userData) {
    try {
      return await this.User.create(userData)

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }

  async getUsers() {
    try {
      return await this.User.findAll({
        include: this.Tweet
      });

    } catch (err) {
      console.log(err);
      return {err: 1, msg: err};
    }
  }
}

export default UserRepository;
