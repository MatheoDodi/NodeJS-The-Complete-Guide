const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const homeRoute = require('./routes/home').router;
const usersRoute = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(usersRoute);

app.listen(3000, () => console.log('The server is running on port 3000'));
