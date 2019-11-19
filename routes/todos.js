const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const getLocalTodos = async (req, res, next) => {
  res.todos = await req.app.locals.todos;
  next();
}

// GET all Todos
router.get('/todos', getLocalTodos, async (req, res) => {
  await res.todos
    .find({})
    .toArray()
    .then(data => res.json(data));
});

// CREATE single Todo
router.post('/create-todo', getLocalTodos, async (req, res) => {
  const { todo, accomplished } = req.body;

  await res.todos
    .insertOne({ todo, accomplished })
    .then(todos => res.json(todos));
});

const getTodo = async (req, res, next) => {
  const todoData = req.app.locals.todos;
  const todoID = ObjectID(req.params.id);

  try {
    todo = await todoData.findOne({ _id: todoID });
    if (todo === null) {
      return res.status(404).json({ msg: "Can't find the Todo" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }

  res.todoID = todo;
  next();
}

// GET single Todo
router.get('/todos/:id', getTodo, async (req, res) => {
  await res.json(res.todoID);
});

// UPDATE properties for todo
router.patch('/todos/:id', getTodo,async (req, res) => {
  const { todo, accomplished } = req.body;
  const todoData = req.app.locals.todos;
  const todoID = res.todoID._id;
  
  if(todo !== null) {
    res.todoID.todo = todo;
  }

  if (accomplished !== null) {
    res.todoID.accomplished = accomplished;
  }

  try {
    const updatedTodo = await todoData.updateOne({ _id: todoID }, { $set: {todo, accomplished} });
    res.status(201).json({msg: 'Update Complete!', updatedTodo});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// DELETE single Todo
router.delete('/todos/:id', getTodo, async (req, res) => {
  const todo = req.app.locals.todos;
  const todoId = res.todoID._id;

  try {
    await todo.deleteOne({ _id: todoId });
    res.status(201).json({ msg: 'Successfully removed!' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;