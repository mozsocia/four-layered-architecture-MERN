const jwt = require('jsonwebtoken');

// Middleware function to verify a JWT token
function verifyToken(req, res, next) {
  // Get the token from the request header
  const token = req.headers['x-access-token'];

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({ error: 'Invalid token' });
    }
    req.userId = decoded.sub;
    next();
  });
}

module.exports = {
  verifyToken
};
