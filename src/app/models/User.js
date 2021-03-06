const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    // Um usuário possui vários endereços, a foreignKey continua como "user_id", pois está referenciando a coluna que está na tabela addresses, é o inverso do "belongsTo"
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
    this.belongsToMany(models.Tech, {
      // Nome da chave estrangeira
      foreignKey: "user_id",
      // A tabela que corresponde ao relacionamento entre usuários e tecnologias, cada usuário pode ter várias tecnologias
      through: "user_techs",
      as: "techs",
    });
  }
}

module.exports = User;
