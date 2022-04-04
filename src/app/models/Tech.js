const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "techs"
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      // Nome da chave estrangeira
      foreignKey: "tech_id",
      // A tabela que corresponde ao relacionamento entre usuários e tecnologias, cada usuário pode ter várias tecnologias
      through: "user_techs",
      as: "users",
    });
  }
}

module.exports = Tech;
