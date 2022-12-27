const TaskRepository = require('../repositories/task.repository');
const UserRepository = require('../repositories/auth.repository')




class TaskBusiness {
  // Get a list of tasks
  async getTasks() {
    return await TaskRepository.getTasks();
  }

  // Create a new task
  async createTask(task, userId) {
    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }

    // Create the task
    return await TaskRepository.createTask(task, userId);
  }

  // Get a task by id
  async getTaskById(id) {
    return await TaskRepository.getTaskById(id);
  }

  // Update a task
  async updateTask(id, task, userId) {
    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }

    // Update the task
    return await TaskRepository.updateTask(id, task, userId);
  }

  // Delete a task
  async deleteTask(id, userId) {
    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }

    // Delete the task
    return await TaskRepository.deleteTask(id);
  }
}

module.exports = new TaskBusiness();
















/*
class TaskBusiness {
  async create(taskData, userId) {
    // Validate the task data
    if (!taskData.name || !taskData.description || !taskData.dueDate) {
      throw new Error('Task data is invalid');
    }

    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }


    // Create the task
    return await TaskRepository.create(taskData);
  }

  async update(id, taskData, userId) {
    // Validate the task data
    if (!taskData.name || !taskData.description || !taskData.dueDate) {
      throw new Error('Task data is invalid');
    }

    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }

    // Update the task
    return await TaskRepository.update(id, taskData);
  }

  async delete(id, userId) {


    // Check if the user is an admin
    const user = await UserRepository.findUserById(userId);
    if (!user || !user.isAdmin) {
      throw new Error('Unauthorized');
    }
    // Delete the task
    return await TaskRepository.delete(id);
  }
}

module.exports = new TaskBusiness();

*/