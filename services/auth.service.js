const AuthBusiness = require('../business/auth.business');
var jwt = require('jsonwebtoken');

class AuthService {
  // Generate a JWT token given a user's credentials
  async generateToken(user) {
    // Set the token expiration date
    const expiresIn = '1d';

    // Set the token payload
    const payload = {
      sub: user.id,
      username: user.username
    };

    // Sign the token with a secret key
    const secret = process.env.JWT_SECRET;
    return await jwt.sign(payload, secret, { expiresIn });
  }

  // Verify a JWT token and extract the user's payload from it
  async verifyToken(token) {
    const secret = process.env.JWT_SECRET;
    return await jwt.verify(token, secret);
  }

  // Register a new user
  async register(user) {
    // Create the new user
    const newUser = await AuthBusiness.register(user);

    // Generate a JWT token for the new user
    const token = await this.generateToken(newUser);

    // Return the token and the user object
    return { token, user: newUser };
  }

  // Login a user
  async login(username, password) {
    // Find the user by username and password
    const user = await AuthBusiness.login(username, password);

    // Generate a JWT token for the user
    const token = await this.generateToken(user);

    // Return the token and the user object
    return { token, user };
  }
}

module.exports = new AuthService();
