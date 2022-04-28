export default async app => {
  await app.sequelize.sync({force: true}); // reset database

  const {User, Tweet} = app.models;
  return await User.create({firstName: 'Viktor'});
}
