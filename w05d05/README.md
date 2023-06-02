# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* practicing teamwork and version control
* get used to a working environment
* experience prior to demo day
* put all of our knowledge together

### Pick a Project
- Wiki Map
- Quiz App
- Story Creator
- Decision Maker
- PasswordKeepR
- Smart TODO List
- Resource Wall
- Buy/Sell Listing Website
- Schoodle
- Food Pick-up Ordering

### User Stories
- A _user story_ describes how users will interact with your application
- They have the form: As a ______, I want to ______, because ______.
- eg. As a _user_, I want to _be able to save posts_, because _I want to review them later_.
- User stories can also be negated: As a _____, I shouldn't be able to ______, because _____.
- eg. As a _user_, I shouldn't be able to _edit other users posts_, because _I don't own those posts_.

### User Scenarios
- A _user scenario_ is a syntactic alternative to user stories
- They have the form: Given _____, when ______, then ______.
- eg. Given _that I am logged in_, when _I click favourite on a post_, then _it is added to my favourites_.
- You can also chain on an _and_ to user stories/scenarios
- eg. Given _that I am logged in_, when _I click favourite on a post_, then _it is added to my favourites_ **and** _the save icon will change to indicate success_.

### ERD
- The user stories provide you with nouns (eg. user, posts, favourites)
- Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

### Routes
- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
- Remember RESTful conventions (they make it much easier)

### REST Examples  

| **Method** | **Path** | **Purpose** |
|:---|:---|:---|
| GET | /resources | Retrieve all of a resource (Browse) |
| GET | /resources/:id | Retrieve a particular resource (Read) |
| POST | /resources/:id | Update a resource (Edit) |
| POST | /resources | Create a new resource (Add) |
| POST | /resources/:id/delete | Delete an existing resource (Delete) |

#### Using additional HTTP verbs
* `PUT` - replace a resource completely  
* `PATCH` - replaces a piece of a resource  
* `DELETE` - deletes a resource  

| **Method** | **Path** | **Purpose** |
|:---|:---|:---|
| GET | /resources | Retrieve all of a resource (Browse) |
| GET | /resources/:id | Retrieve a particular resource (Read) |
| PATCH | /resources/:id | Update a resource (Edit) |
| POST | /resources | Create a new resource (Add) |
| DELETE | /resources/:id | Delete an existing resource (Delete) |


### MVP vs MVD
- There is a concept in development of an MVP, the Minimum Viable Product
- An MVP has just enough features to be useful to a user
- This concept helps streamline the development process and help keep the team on target
- For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
- **If you aren't going to demo it, don't build it**

### Wireframes
- Draw out the structure of your web pages
- This will make it much easier to build out these pages later
- This is also a great opportunity to get input from all of the team members
- Design matters... however you are a developer, not a designer
- Get inspiration from websites you visit

### User Login
- Don't do it
- Seriously, don't do it
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
- We have made all the tech choices for you
- Back End: Node and Express
- Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton
- Use the provided `node-skeleton` as a template for your project
- This will get you up and running quickly

### SPA vs Multi-page App
- These concepts are not mutually exclusive
- You can choose one or the other or both

### Splitting up the Work
- Horizontally - each dev works on a single layer of the stack at a time (db, backend, or frontend)
- Vertically - each dev works on a full-stack feature (something that requires a bit of db, backend, and frontend)
- Pair Programming - working together on the same tasks

### Communication
- Make sure to communicate with your team members
- Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page
