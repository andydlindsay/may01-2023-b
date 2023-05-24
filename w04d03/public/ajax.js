/* eslint-disable no-undef */

console.log('hello');

// $.ajax({
//   url: 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
//   method: 'GET',
//   success: (response) => {
//     console.log(response);
//   }
// });

// const myFunc = (response) => {
//   console.log('inside promise', response);
// }

$.ajax({
  url: 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
  method: 'GET',
}).then((response) => {
  console.log('inside promise', response);
});
