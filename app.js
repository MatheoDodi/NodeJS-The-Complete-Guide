const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.set('view engine', 'pug'); // Setting the templating Engine
app.set('views', 'views'); // Setting the folder from which to load views from

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
