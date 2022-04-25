import {DataTypes, Model} from 'sequelize';

const modelName = 'tweet';
const params = {
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
  parentTweetId: {
    type: DataTypes.INTEGER,
  }
};

class Tweet extends Model {
}

export default sequelize => Tweet.init(params, {sequelize, modelName}) && Tweet;

