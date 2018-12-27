const fs = require('fs');
const path = require('path');
const db = require('../util/database');
const Product = require('./product');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    return Product.getSingleProductById(id).then(([row, field]) => {
      const [product] = row;
      const { title, price, description, imageUrl } = product;
      db.execute(
        'INSERT INTO cart(title, price, description, imageUrl) VALUES(?, ?, ?, ?)',
        [title, price, description, imageUrl]
      );
    });
  }

  static deleteProduct(id) {
    return db.execute(' DELETE FROM cart WHERE cart.id = ? ', [id]);
  }

  static getProducts() {
    return db.execute(' SELECT * FROM cart');
  }
};
