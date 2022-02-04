import PingController from "../controllers/PingController.js";
import UserController from "../controllers/UserController.js";

export default router => {
  const user = new UserController();

  // Ping
  router.get(`/ping`, PingController.getPong);

  // User
  router.get(`/user/test/ping`, user.getPong);
  router.post(`/user/registration`, user.registration);
  router.post(`/user/login`, user.login);
  router.post(`/user/logout`, user.logout);
  router.post(`/user/activate`, user.activate);
  router.get(`/user/refresh`, user.refresh);
  router.get(`/users`, user.gerUsers);

  return router;
};
