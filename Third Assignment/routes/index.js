const express = require('express');
const router = express.Router();
const path = require('path');
const root = require('../util/root');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'index.html'));
});

module.exports = router;
