import dotenv from 'dotenv';

dotenv.config();
import express from 'express';

class App {
  #_app;
  #PORT;

  constructor() {
    this.#_app = express();
    this.#PORT = process.env.PORT;
    this.#init();
    this.#ping();
  }

  #init() {
    this.#_app.use(express.json());
  }

  #ping() {
    this.#_app.get('/ping', (req, res) => {
      res.status(200).end('pong');
    })
  }

  get app() {
    return this.#_app;
  }

  start() {
    try {
      this.#_app.listen(this.#PORT, () => console.log(`server run on port: ${this.#PORT}`))
    } catch (e) {
      console.log(`server start error: ${e}`);
    }
  }
}

export default App;
