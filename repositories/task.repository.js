const Task = require('./task.model');

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