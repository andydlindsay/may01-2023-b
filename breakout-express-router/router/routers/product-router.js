const express = require('express');
const router = express.Router();

const productQueries = require('../db/product-queries');

router.use((req, res, next) => {
  // if (!req.cookies.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('inside the product router');

  next();
});

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
