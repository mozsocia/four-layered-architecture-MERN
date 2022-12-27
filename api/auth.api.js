const express = require('express');
const AuthService = require('../services/auth.service');

const router = express.Router();

// POST /register - Register a new user
router.post('/register', async (req, res) => {
  try {
    // Register the user
    const result = await AuthService.register(req.body);
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// POST /login - Login a user
router.post('/login', async (req, res) => {
  try {
    // Login the user
    const result = await AuthService.login(req.body.username, req.body.password);
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
