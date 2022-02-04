import AppImport from './App.js';
// import User from './src/models/User.js'

const App = new AppImport();
App.start();

export const sequelize = App.sequelize;
