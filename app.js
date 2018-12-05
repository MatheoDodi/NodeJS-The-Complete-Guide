const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'notFound.html'));
});

app.listen(3000);
