# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX / AJAJ
* Asynchronous Javascript And XML
* eXtensible Markup Language
* this allows JS to make HTTP requests (web client)
* empty page loads for the user => fetch some data => dynamically create HTML elements

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  url: 'http://www.someotherserver.com/about',
  method: 'GET',
  success: (response) => {},
  error: (err) => {}
})

$.ajax({
  url: 'http://www.someotherserver.com/about',
  method: 'GET',
}).then((response) => {})
  .catch((err) => {});
```

/* eslint-disable no-undef */

?name=taco&price=1.99&tagline=sweet+and+spicy&calories=250
name=tacos&price=1.99&tagline=sweet%20and%20spicy&calories=250


















