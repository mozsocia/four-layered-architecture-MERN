const express = require('express');
const mongoose = require('mongoose');
const TaskAPI = require('./api/task.api');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mount the API routes
app.use('/api/tasks', TaskAPI);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});