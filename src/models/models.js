import getUser from './User.js';
import getTweet from './Tweet.js';

export default sequelize => {
  const User = getUser(sequelize);
  const Tweet = getTweet(sequelize);

  Tweet.belongsTo(User);
  User.hasMany(Tweet);

  return {
    User,
    Tweet,
  }
}
