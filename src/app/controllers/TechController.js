const Tech = require("../models/Tech");
const User = require("../models/User");

class TechController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findByPk(user_id, {
        include: {
          association: "techs",
          attributes: ["id", "name"],
          through: { attributes: ["user_id"] },
        },
      });
      if (!user) return res.status(400).json({ error: "User not found" });

      // Retorna as tecnologias por usuário
      return res.json(user.techs);
    } catch (error) {
      return res.status(400).json();
    }
  }
  async store(req, res) {
    try {
      const { user_id } = req.params;
      const { name } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) return res.status(404).json({ error: "User not found" });

      const [tech] = await Tech.findOrCreate({ where: { name } });

      // Quando um relacionamento N-N é adicionando em um model, o sequelize cria métodos auxiliares para tratar esses os dados para esses relacionamentos
      await user.addTech(tech);
      
      return res.status(201).json();
    } catch (error) {
      return res.status(400).json();
    }
  }
  async delete(req, res) {
    try {
      const { user_id } = req.params;
      const { name } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) return res.status(400).json({ error: "User not found" });

      // Encontrar tecnologia pelo nome
      const tech = await Tech.findOne({ where: { name } });
      await user.removeTech(tech);
      return res.json();
    } catch (error) {
      return res.status(400).json();
    }
  }
}

module.exports = new TechController();
