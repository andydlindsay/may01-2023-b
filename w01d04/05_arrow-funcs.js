// arrow funcs added in ES6 (2015)
// advantages
// 1. no function keyword!!!!
// 2. if only one argument, we can omit the parens
// 3. if only one line of code, we can omit the curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs DO NOT create `this`

const myFunc1 = function(name) {
  return `hello there ${name}`;
};

const sayHello = name => `hello there ${name}`;

// arr.forEach(name => `hello there ${name}`)

const returnVal = sayHello('bob');

console.log('returnVal', returnVal);

// if (error) throw error;
