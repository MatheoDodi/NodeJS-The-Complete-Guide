const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

// Set up for express-handlebars
// app.engine(
//   'handlebars',
//   expressHbs({
//     layoutsDir: path.join(__dirname, '/views/layouts'),
//     defaultLayout: 'main-layout',
//     extname: 'handlebars'
//   })
// );

app.set('view engine', 'ejs'); // Setting the templating Engine
app.set('views', 'views'); // Setting the folder from which to load views from

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  res.render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
