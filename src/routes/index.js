const { Router } = require("express");
const routes = Router();
const UserController = require("../app/controllers/UserController");
const AddressController = require("../app/controllers/AddressController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

module.exports = routes;
