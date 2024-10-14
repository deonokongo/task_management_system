const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a new task
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = new Task({
      title,
      description,
      dueDate,
      priority: priority || 'medium',
      status: status || 'ongoing',
      user: req.user.id 
    });

    // Save the task to the database
    await newTask.save();
    return res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ message: 'Server error while creating task' });
  }
});

// Get all tasks for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    // Fetch tasks associated with the logged-in user
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error while fetching tasks' });
  }
});

// Get a specific task by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ message: 'Server error while fetching task' });
  }
});

// Update a task
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    let task = await Task.findById(req.params.id);

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }

    // Update task properties
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.status = status || task.status;

    await task.save();
    res.status(200).json(task); // Respond with the updated task
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Server error while updating task' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found or not authorized' });
    }

    await task.remove();
    res.status(200).json({ message: 'Task deleted successfully' }); // Confirm deletion to the frontend
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error while deleting task' });
  }
});

module.exports = router;
