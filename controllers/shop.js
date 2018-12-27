const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products',
      isLoggedIn
    });
  });
};

exports.getIndex = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;
  Product.fetchAll().then(([rows, fieldData]) => {
    console.log(req.session);
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'Home',
      path: '/',
      isLoggedIn
    });
  });
};

exports.getCart = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;
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
        products: cartProducts,
        isLoggedIn
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
  const isLoggedIn = req.session.isLoggedIn;
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders',
    isLoggedIn
  });
};

exports.getCheckout = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
    isLoggedIn
  });
};

exports.getProductById = (req, res, next) => {
  const { id } = req.params;
  const isLoggedIn = req.session.isLoggedIn;
  Product.getSingleProductById(id).then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: 'Shop',
      path: `/products/${id}`,
      isLoggedIn
    });
  });
};

exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;
  res.render('shop/login', {
    path: '/login',
    pageTitle: 'Login',
    isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect('/');
};
