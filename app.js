const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('mongodb://localhost:27017/playground-app',{ useUnifiedTopology: true }, (err, client) => {
  err ? console.log(err) : console.log('MongoDB Connected');

  const db = client.db('playground-app');
  const todos = db.collection('todos');

  app.locals.todos = todos;
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/'));
app.use('/', require('./routes/todos'));

app.listen(3000, () => console.log('Server running on 3000'));