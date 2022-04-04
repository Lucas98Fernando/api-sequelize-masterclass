const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../app/models/User");
const Address = require("../app/models/Address");
const Tech = require("../app/models/Tech");

const connection = new Sequelize(dbConfig);

(async () => {
  try {
    await connection.authenticate();
    console.log("Conexão estabelecida com o banco");
  } catch (error) {
    console.error(`Ocorreu um erro ${error}`);
  }
})();

User.init(connection);
Address.init(connection);
Tech.init(connection);

// Quando ocorre um init() é "cadastrado" os models dentro da conexão, ou seja, vai conter o User e Address
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
