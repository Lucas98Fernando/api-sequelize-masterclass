const User = require("../models/User");

class UserController {
  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json(users);
    } catch (error) {
      return response.status(400).json();
    }
  }
  async store(request, response) {
    try {
      const { name, email } = request.body;

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
