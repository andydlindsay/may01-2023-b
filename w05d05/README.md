# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* practicing teamwork and version control
* get used to a working environment
* experience prior to demo day
* put all of our knowledge together

### Pick a Project

### User Stories
* describes how a user will interact with our app
* As a ______, I can ______, because _______

* As a logged-in user, I can see a list of available maps, because I'm interested in things in my area
* As a non logged-in user, I cannot edit pins on a map, because it doesn't belong to me

/planning/user-stories.md

### Nouns
* nouns === table
* ERD
* lowest fidelity possible

/planning/erd.png
/planning/erd-stretch.png

### Routes
* RESTful routing

GET /all-the-users
POST /create-a-new-user

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

PUT - replace a resource completely
PATCH - replaces a piece of a resource
DELETE - deletes a resource

/planning/routes.md

### MVD
* MVP? Minimum Viable Product
* Minimum Viable Demo (MVD)
* If you're not going to show it, don't build it

### User Login
* please don't

```js
// http://localhost:8001/login/5
app.get('/login/:id', (req, res) => {
  // set a cookie
  req.cookies.user_id = req.params.id;

  // plaintext cookies
  res.cookie('user_id', req.params.id);

  // redirect somewhere
  res.redirect('/');
});
```

### Wireframes/Mockups
* every team member part of the process
* lowest fidelity possible

/planning/mockup-homepage.png
/planning/mockup-productpage.png



<link href="layout.css" />

/styles/layout.scss
scss => css => public directory
/public/layout.css


### SPA vs Multi-page
* these are not mutually exclusive

### Dividing up the Work
* horizontal => divided up by layer
* vertical => everyone gets a piece of each layer
* pair programming

### Communication
* this will be hardest thing













