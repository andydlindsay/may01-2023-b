require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use((req, res, next) => {
  // custom middleware
  console.log('inside the main router, applies to ALL routes');

  db.query('SELECT * FROM users WHERE id = $1', [req.cookies.user_id])
    .then((response) => {
      const user = response.rows[0];
      if (!user.admin) {
        return res.redirect('/login');
      }

      next();
    });

  // next();
});

// require the routers
const productRouter = require('./routers/product-router');
const blogpostRouter = require('./routers/blogpost-router');

// use the routers
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
