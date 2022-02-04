class PingController {

  /**
   * @desc GET text test answer
   * @router /ping
   */
  static getPong(req, res, next) {
    try {
      res.status(200).end('pong');

    } catch (err) {
      next(err);
    }
  }
}

export default PingController;
