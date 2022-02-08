import PingController from "../controllers/PingController.js";
import UserController from "../controllers/UserController.js";
import TweetController from "../controllers/TweetController.js";

export default (router, models) => {
  const userController = new UserController(models);
  const tweetController = new TweetController(models);

  // Ping
  router.get(`/ping`, PingController.getPong);

  // User
  router.get(`/users/test/ping`, userController.getPong);
  router.get(`/users`, userController.getUsers);
  router.post(`/users`, userController.registration);
  router.post(`/users/login`, userController.login);
  router.post(`/users/logout`, userController.logout);
  router.post(`/users/activate`, userController.activate);
  router.get(`/users/refresh`, userController.refresh);

  //tweet
  router.get(`/tweets/test/ping`, tweetController.getPong);
  router.post(`/tweets`, tweetController.addTweet);
  router.get(`/tweets`, tweetController.getTweets);

  return router;
};
