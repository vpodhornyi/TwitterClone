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
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_tweet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: "tweet"
  });

  Tweet.belongsTo(User);

  return Tweet;
};

