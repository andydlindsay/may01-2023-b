// objects, arrays, and functions

const a = 5;
const b = a;

// const sayHello = function(name) {
//   // console.log(`hello there ${name}`);
//   return `hello there ${name}`;
// };

// // const returnVal = sayHello('alice');
// // const returnVal = sayHello;

// // console.log(sayHello.toString());

// const anotherFunc = sayHello;

// console.log(anotherFunc.toString());

const sayHello = function(name) {
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
};

// sayHello.username = 'alice';

// console.log(sayHello);

const funcs = [];
funcs.push(sayHello);
funcs.push(console.log);

console.log(funcs);

// funcs[0]('bob');

funcs[1](funcs[0]("carol"));
