import {DataTypes, Model} from 'sequelize';
// import tweet from './Tweet.js';

class User extends Model {
}

export default sequelize => {
  // const Tweet = tweet(sequelize);

  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
/*    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bg_image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },*/
  }, {
    sequelize,
    modelName: "user"
  });

  // User.hasMany(Tweet);

  return User;
};

