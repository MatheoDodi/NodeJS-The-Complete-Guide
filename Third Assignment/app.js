const express = require('express');
const rootRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRoute);
app.use('/users', usersRoute);

app.listen(8000, () => console.log('Server runnning on port 8000'));
