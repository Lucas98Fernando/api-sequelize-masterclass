const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.NUMBER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    // Um endereço pertence a um usuário
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Address;
