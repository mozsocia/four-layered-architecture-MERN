const User = require('../models/user.model');

class AuthRepository {
  // Create a new user
  async createUser(user) {
    return await User.create(user);
  }

  // Find a user by username
  async findUserByUsername(username) {
    return await User.findOne({ username });
  }

  async findUserById(id) {
    return await User.findById(id);
  }


  // Check the password for a given user
  async checkPassword(user, password) {
    return await user.comparePassword(password);
  }
}

module.exports = new AuthRepository();