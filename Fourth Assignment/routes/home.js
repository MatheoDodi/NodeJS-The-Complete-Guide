const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Form' });
});

router.post('/users', (req, res, next) => {
  users.push(req.body.user);
  res.redirect('/users');
});

module.exports = { router, users };
