const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'Home',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getProducts(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.fetchAll(products => {
    const product = Product.getSingleProductById(products, prodId)[0];
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.deleteCart = (req, res, next) => {
  const { productId, productPrice } = req.body;
  Cart.deleteProduct(productId, productPrice);
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.getProductById = (req, res, next) => {
  const { id } = req.params;
  Product.getSingleProductById(id).then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: 'Shop',
      path: `/products/${id}`
    });
  });
};

exports.getLogin = (req, res, next) => {
  res.render('shop/login', {
    path: '/login',
    pageTitle: 'Login'
  });
};

exports.postLogin = (req, res, next) => {
  res.redirect('/');
};
