const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos


router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const saved = await newTodo.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
