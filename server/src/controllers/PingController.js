class PingController {

  /**
   * @desc GET text test answer
   * @router /ping
   */
  async getPong(req, res, next) {
    try {
      return await res.status(200).end('pong');

    } catch (err) {
      next(err);
    }
  }
}

export default PingController;
