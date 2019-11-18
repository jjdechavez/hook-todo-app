const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/todos', (req, res) => {
  const todos = req.app.locals.todos;

  todos
    .find({})
    .toArray()
    .then(data => res.json(data));
});

router.post('/create-todo', (req, res) => {
  const todos = req.app.locals.todos;
  const { todo, accomplished } = req.body;

  todos
    .insertOne({ todo, accomplished })
    .then(todos => res.json(todos));
});

const getTodo = (req, res, next) => {
  const todoData = req.app.locals.todos;
  const todoID = ObjectID(req.params.id);

  try {
    todo = todoData.find({ _id: todoID });
    if (todo === null) {
      return res.status(404).json({ msg: "Can't find the Todo" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }

  res.todo = todo;
  next();
}

// GET single Todo
router.get('/todos/:id', getTodo, (req, res) => {
  // console.log(res.todo)
  res.json(res.todo);
});

// UPDATE properties for todo
// router.patch('/todos/:id', (req, res) => {
//   const { todo, accomplished } = req.body;
  
// });

module.exports = router;