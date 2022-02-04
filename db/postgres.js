import {Sequelize} from 'sequelize';

class SequelizeClient {
  #sequelize;

  constructor() {
    this.#sequelize = new Sequelize(
      process.env.PG_DB_NAME,
      process.env.PG_USER,
      process.env.PG_PASSWORD,
      {dialect: process.env.PG_DIALECT});
    this.#connectionTest();
  }

  #connectionTest() {
    this.#sequelize.authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(error => console.error('Unable to connect to the database:', error))
  }

  #sync() {
    this.#sequelize.sync().then(result => {
      // console.log('result', result);
    })
      .catch(err => console.log('err', err));
  }

  get client() {
    return this.#sequelize;
  }
}

export default SequelizeClient;
