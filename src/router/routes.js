import PingController from "../controllers/PingController.js";
import UserController from "../controllers/UserController.js";
import TweetController from "../controllers/TweetController.js";

export default (router, sequelize) => {
  const userController = new UserController(sequelize);
  const tweetController = new TweetController(sequelize);

  // Ping
  router.get(`/ping`, PingController.getPong);

  // User
  router.get(`/user/test/ping`, userController.getPong);
  router.post(`/user/registration`, userController.registration);
  router.post(`/user/login`, userController.login);
  router.post(`/user/logout`, userController.logout);
  router.post(`/user/activate`, userController.activate);
  router.get(`/user/refresh`, userController.refresh);
  router.get(`/users`, userController.gerUsers);

  //tweet
  router.get(`/tweet/test/ping`, tweetController.getPong);

  return router;
};
