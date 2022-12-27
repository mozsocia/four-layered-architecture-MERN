const AuthRepository = require('../repositories/auth.repository');

class AuthBusiness {


  // Register a new user
  async register(user) {
    // Check if the username is already taken
    const existingUser = await AuthRepository.findUserByUsername(user.username);
    if (existingUser) {
      throw new Error('Username already taken');
    }

    // Validate the input data
    if (!user.username || !user.password) {
      throw new Error('Username and password are required');
    }
    if (user.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Create the new user
    return await AuthRepository.createUser(user);
  }

  // Login a user
  async login(username, password) {

    // Validate the input data
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Find the user by username
    const user = await AuthRepository.findUserByUsername(username);
    if (!user) {
      throw new Error('Invalid username or password');
    }

    // Check the password
    const isValidPassword = await AuthRepository.checkPassword(user, password);
    if (!isValidPassword) {
      throw new Error('Invalid username or password');
    }

    // Return the user object
    return user;
  }

}

module.exports = new AuthBusiness();