const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const adminData = require('./admin');

router.get('/', productsController.getProducts);

module.exports = router;
