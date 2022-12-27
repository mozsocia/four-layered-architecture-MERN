const Task = require('./task.model');


const Task = require('../models/task.model');

class TaskRepository {
  // Get a list of tasks
  static async getTasks() {
    return await Task.find();
  }

  // Create a new task
  static async createTask(task, userId) {
    task.userId = userId;
    return await Task.create(task);
  }

  // Get a task by id
  static async getTaskById(id) {
    return await Task.findById(id);
  }

  // Update a task
  static async updateTask(id, task, userId) {
    task.userId = userId;
    return await Task.findByIdAndUpdate(id, task, { new: true });
  }

  // Delete a task
  static async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }
}

module.exports = TaskRepository;




/*
class TaskRepository {
  async getAll() {
    return await Task.find();
  }

  async getById(id) {
    return await Task.findById(id);
  }

  async create(taskData) {
    const task = new Task(taskData);
    return await task.save();
  }

  async update(id, taskData) {
    return await Task.findByIdAndUpdate(id, taskData, { new: true });
  }

  async delete(id) {
    return await Task.findByIdAndRemove(id);
  }
}

module.exports = new TaskRepository();

*/