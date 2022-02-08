import {DataTypes, Model} from 'sequelize';
import user from './User.js';

class Tweet extends Model {
}

export default sequelize => {
  const User = user(sequelize);

  Tweet.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_tweet_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: "tweet"
  });

  Tweet.User = Tweet.belongsTo(User);

  return Tweet;
};

