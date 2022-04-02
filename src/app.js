const express = require("express");
const routes = require("./routes");

require("dotenv/config");
require("./database");

class App {
  express = express.application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
