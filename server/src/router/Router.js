import PingController from "../controllers/PingController.js";
import UserController from "../controllers/UserController.js";
import TweetController from "../controllers/TweetController.js";
import routes from "./routes.js";

class Router {
  constructor(router, models) {
    this.controllers = {
      pingController: new PingController(),
      userController: new UserController(models),
      tweetController: new TweetController(models)
    }
    this._router = router;
  }

  get router() {
    Object.keys(routes).forEach(key => routes[key].forEach(rout => {
      const {method, url, controller, controllerMethod, middlewares} = rout;
      if (middlewares) middlewares.forEach(func => ((req, res, next) => func(req, res, next))());
      this._router[method](url, this.controllers[controller][controllerMethod].bind(this.controllers[controller]))
    }))
    return this._router;
  }
}

export default Router;
