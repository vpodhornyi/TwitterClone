import {Sequelize} from 'sequelize';

class SequelizeClient {
  #_sequelize;

  constructor() {
    this.#_sequelize = new Sequelize(
      process.env.PG_DB_NAME,
      process.env.PG_USER,
      process.env.PG_PASSWORD,
      {dialect: process.env.PG_DIALECT});
    // this.#connectionTest();
  }

  #connectionTest() {
    this.#_sequelize.authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(error => console.error('Unable to connect to the database:', error))
  }

  get sequelize() {
    return this.#_sequelize;
  }
}

export default SequelizeClient;