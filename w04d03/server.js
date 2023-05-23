const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

const foodItems = require('./data/food-items');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/food-items', (req, res) => {
  res.json(foodItems);
});

app.post('/food-items', (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const tagline = req.body.tagline;
  const calories = Number(req.body.calories);

  const id = Math.random().toString(36).substring(2, 5);

  const newFoodItem = {
    id: id,
    name: name,
    price: price,
    tagline: tagline,
    calories: calories
  };

  foodItems.push(newFoodItem);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
