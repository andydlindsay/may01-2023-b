// const ourMap = function(arr, callback) {
//   // create an output array
//   const output = [];

//   // loop through the provided array
//   for (const element of arr) {
//     // call the provided callback with each element of the array AND store the return value
//     const returnVal = callback(element);

//     // add the return value to the output array
//     output.push(returnVal);
//   }

//   // return the output array
//   return output;
// };

// runMyFanc === sayHello

const ourMap = (arr, callback) => {
  // create an output array
  const output = [];

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with each element of the array AND store the return value
    const returnVal = callback(element);

    // add the return value to the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const names = ['alice', 'bob', 'carol'];

const doOnEachLoop1 = function(name) {
  return `you are logged in as ${name}`;
};

const doOnEachLoop2 = name => `you are logged in as ${name}`;

// const mappedNames = names.map(doOnEachLoop2);
// console.log(names);
// console.log(mappedNames);

const ourMappedNames = ourMap(names, doOnEachLoop2);
console.log(names);
console.log(ourMappedNames);
