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
  }, {
    sequelize,
    modelName: "user"
  });

  // User.Tweet = User.hasMany(Tweet);

  return User;
};

/*

class Product extends Model {
}

Product.init({
  title: Sequelize.STRING
}, {sequelize, modelName: 'product'});

class User extends Model {
}

User.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, {sequelize, modelName: 'user'});

class Address extends Model {
}

Address.init({
  type: DataTypes.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
}, {sequelize, modelName: 'address'});

// We save the return values of the association setup calls to use them later
Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
// Also works for `hasOne

return Product.create({
  title: 'Chair',
  user: {
    firstName: 'Mick',
    lastName: 'Broadstone',
    addresses: [{
      type: 'home',
      line1: '100 Main St.',
      city: 'Austin',
      state: 'TX',
      zip: '78704'
    }]
  }
}, {
  include: [{
    association: Product.User,
    include: [User.Addresses]
  }]
});*/
