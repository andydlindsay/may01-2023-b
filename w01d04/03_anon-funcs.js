// let age = 42;
// console.log(age);

// console.log(42);

const runMyFunc = function(callback) {
  callback('elise');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

console.log();

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});
