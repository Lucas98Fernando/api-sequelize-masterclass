const { Router } = require("express");
const routes = Router();
const UserController = require("../app/controllers/UserController");
const AddressController = require("../app/controllers/AddressController");
const TechController = require("../app/controllers/TechController");
const ReportController = require("../app/controllers/ReportController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
