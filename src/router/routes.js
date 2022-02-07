import PingController from "../controllers/PingController.js";
import UserController from "../controllers/UserController.js";
import TweetController from "../controllers/TweetController.js";

export default (router, sequelize) => {
  const userController = new UserController(sequelize);
  const tweetController = new TweetController(sequelize);

  // Ping
  router.get(`/ping`, PingController.getPong);

  // User
  router.get(`/users/test/ping`, userController.getPong);
  router.get(`/users`, userController.gerUsers);
  router.post(`/users/registration`, userController.registration);
  router.post(`/users/login`, userController.login);
  router.post(`/users/logout`, userController.logout);
  router.post(`/users/activate`, userController.activate);
  router.get(`/users/refresh`, userController.refresh);

  //tweet
  router.get(`/tweets/test/ping`, tweetController.getPong);
  router.post(`/tweets`, tweetController.addTweet);

  return router;
};
