import {DataTypes, Model} from 'sequelize';

const modelName = 'user';
const params = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  /*    lastName: {
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
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bgImageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },*/
};

class User extends Model {
}

export default sequelize => User.init(params, {sequelize, modelName}) && User;
