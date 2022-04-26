import getUser from './User.js';
import getTweet from './Tweet.js';

class Model {
  constructor(sequelize) {
    this._models = {
      User: getUser(sequelize),
      Tweet: getTweet(sequelize),
    }
    this.associateUserTweet();
  }

  associateUserTweet(){
    const {User, Tweet} = this._models;
    Tweet.belongsTo(User);
    User.hasMany(Tweet);
  }

  get models() {
    return this._models;
  }
}

export default Model;
