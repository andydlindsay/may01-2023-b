// callback - a function that gets passed to another function to be invoked by that function
// first-class function

const runMyFunc = function(callback) {
  callback('dean'); // sayHello('dean')
  return myFunc;
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addTwo = function(num) {
  console.log(num + 2);
};

runMyFunc(sayHello);
console.log();
runMyFunc(addTwo);
