const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 8001;

// Configuration
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'whatever',
  keys: ['dfskljasdklfj'],
}));

// Data
const users = {
  abc: {
    id: 'abc',
    email: 'a@a.com',
    password: bcrypt.hashSync('1234', 10),
  },
  def: {
    id: 'def',
    email: 'b@b.com',
    password: '$2a$10$ze5tSwqhZO8Kj9xdZT/IPO.VhRAkoQf3CWZ5VjZE3KQLa9wnXXM0y', // 'monkeyfuzz'
  },
};

// Login
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // check if an email AND a password have been provided
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND a password');
  }

  // looking for an email to match the email a user has typed in
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('No user with this email');
  }

  // does the provided password NOT match the stored password
  // if (foundUser.password !== password) {
  if (!bcrypt.compareSync(password, foundUser.password)) {
    return res.status(400).send('Passwords do not match');
  }

  // happy path! the user is who they say they are
  // res.cookie('userId', foundUser.id);
  req.session.userId = foundUser.id;

  res.redirect('/protected');
});

// Register
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // check if an email AND a password have been provided
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND a password');
  }

  // looking for an email to match the email a user has typed in
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we find a user
  if (foundUser) {
    return res.status(400).send('A user with that email already exists');
  }

  // create a new user object
  const id = Math.random().toString(36).substring(2, 5);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    id: id,
    email: email,
    password: hash
  };

  // update the users object
  users[id] = newUser;
  console.log(users);

  // send the user to the login page
  res.redirect('/login');
});

// Protected
app.get('/protected', (req, res) => {
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).send('You have to be logged in to see the page');
  }

  const templateVars = {
    user: users[userId]
  };

  res.render('protected', templateVars);
});

// Logout
app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  // req.session.userId = null; // { userId: null }
  req.session = null; 

  res.redirect('/login');
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
