const express = require('express');

const app = express();

app.use('/users', (req, res) => {
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res) => {
  return res.send('<h1>Home</h1>');
});

app.listen(3000);
