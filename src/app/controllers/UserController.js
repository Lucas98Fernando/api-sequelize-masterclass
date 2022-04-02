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
    const { name, email } = request.body;
    try {
      const user = await User.create({ name, email });
      return response.json(user);
    } catch (error) {
      return response.status(400).json();
    }
  }
}

module.exports = new UserController();
