const express = require('express');
const TaskService = require('../services/task.service');
const { verifyToken } = require('../middleware/auth.middleware');

const router = express.Router();

// GET /tasks - Get a list of tasks
router.get('/tasks', async (req, res) => {
  try {
    // Get the tasks
    const tasks = await TaskService.getTasks();
    res.send(tasks);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// POST /tasks - Create a new task
router.post('/tasks', verifyToken, async (req, res) => {
  try {
    // Create the task
    const task = await TaskService.createTask(req.body, req.userId);
    res.send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// GET /tasks/:id - Get a task by id
router.get('/tasks/:id', async (req, res) => {
  try {
    // Get the task
    const task = await TaskService.getTaskById(req.params.id);
    res.send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// PUT /tasks/:id - Update a task by id
router.put('/tasks/:id', verifyToken, async (req, res) => {
  try {
    // Update the task
    const task = await TaskService.updateTask(req.params.id, req.body, req.userId);
    res.send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// DELETE /tasks/:id - Delete a task by id
router.delete('/tasks/:id', verifyToken, async (req, res) => {
  try {
    // Delete the task
    const task = await TaskService.deleteTask(req.params.id, req.userId);
    res.send(task);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;


//
//
//
/*

const express = require('express');
const TaskService = require('../services/task.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await TaskService.getAll();
  res.send(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await TaskService.getById(req.params.id);
  res.send(task);
});

router.post('/', async (req, res) => {
  const task = await TaskService.create(req.body);
  res.send(task);
});

router.put('/:id', async (req, res) => {
  const task = await TaskService.update(req.params.id, req.body);
  res.send(task);
});

router.delete('/:id', async (req, res) => {
  const task = await TaskService.delete(req.params.id);
  res.send(task);
});

module.exports = router;
*/