const TaskBusiness = require('../business/task.business');

const TaskRepository = require('../repositories/task.repository');

class TaskService {
  // Get a list of tasks
  static async getTasks() {
    return await TaskBusiness.getTasks();
  }

  // Create a new task
  static async createTask(task, userId) {
    return await TaskBusiness.createTask(task, userId);
  }

  // Get a task by id
  static async getTaskById(id) {
    return await TaskBusiness.getTaskById(id);
  }

  // Update a task
  static async updateTask(id, task, userId) {
    return await TaskBusiness.updateTask(id, task, userId);
  }

  // Delete a task
  static async deleteTask(id, userId) {
    return await TaskBusiness.deleteTask(id, userId);
  }
}

module.exports = TaskService;





/*
const TaskBusiness = require('../business/task.business');

class TaskService {
  async getAll() {
    return await TaskBusiness.getAll();
  }

  async getById(id) {
    return await TaskBusiness.getById(id);
  }

  async create(taskData) {
    return await TaskBusiness.create(taskData);
  }

  async update(id, taskData) {
    return await TaskBusiness.update(id, taskData);
  }

  async delete(id) {
    return await TaskBusiness.delete(id);
  }
}

module.exports = new TaskService();

*/