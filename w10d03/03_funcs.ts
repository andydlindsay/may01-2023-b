// arguments, return value, name

const sayHello = (name: string, age: number = 42): string => {
  return `hello there ${name}`;
  // console.log(`hello there ${name}`);
};

console.log('did this work???');

const returnVal2 = sayHello('alice');
const returnVal1 = sayHello('bob', 50);

const returningPromise = (bool: boolean): Promise<boolean> => {
  return new Promise((resolve) => {
    resolve(bool);
  });
};

returningPromise(false)
  .then((result) => {});
