const { Op } = require("sequelize");
const User = require("../models/User");

class ReportController {
  async show(req, res) {
    // Encontrar todos usuários que possuem o e-mail que termina com @gmail.com.br
    // Desses usuários, buscar todos que moram na "Rua Vasco da Gama"
    // Desses usuários, buscar as tecnologias que começam com "React"
    try {
      const users = await User.findAll({
        attributes: ["name", "email"],
        where: {
          email: {
            // O valor retornado no Op.like se tornará em uma chave do objeto
            [Op.iLike]: "%@gmail.com.br",
          },
        },
        include: [
          { association: "addresses", where: { street: "Rua Vasco da Gama" } },
          {
            association: "techs",
            where: {
              name: {
                [Op.iLike]: "React%",
              },
            },
          },
        ],
      });

      return res.json(users);
    } catch (error) {
      return res.status(400).json();
    }
  }
}

module.exports = new ReportController();
