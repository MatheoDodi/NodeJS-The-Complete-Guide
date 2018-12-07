const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const products = [];

router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postAddProduct(products));

exports.routes = router;
exports.products = products;
