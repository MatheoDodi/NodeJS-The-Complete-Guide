const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static getSingleProductById(products, id) {}

  static deleteProductById(products, id) {}

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products');
  }
};
