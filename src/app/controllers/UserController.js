const User = require("../models/User");

class UserController {
  async index(request, response) {
    try {
      const users = await User.findAll();

      if(!users.length) return response.json('Nenhum usuário encontrado')

      return response.json(users);
    } catch (error) {
      return response.status(400).json();
    }
  }
  async store(request, response) {
    try {
      const { name, email } = request.body;

      if(!name || !email) return response.status(400).json("Por favor, preencher todos os campos")

      const emailAlreadyInUse = await User.findOne({ where: { email } })

      if(emailAlreadyInUse) return response.status(409).json('Email já em uso')

      const user = await User.create({ name, email });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json();
    }
  }
}

module.exports = new UserController();
