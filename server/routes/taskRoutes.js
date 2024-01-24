const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  try {
    const { projectId, description } = req.body;

    const newTask = new Task({ projectId, description });

    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Unable to add task' });
  }
});

module.exports = router;
