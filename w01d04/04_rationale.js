// single responsibility principle
// each piece of code should be responsible for only one thing

const loopThroughArray = function(arr, callback) {
  for (const index in arr) {
    const element = arr[index];
    // console.log('element', element);
    // console.log(`Does ${element} want some treats?`);
    callback(element);
  }
};

const giveATreat = function(petName) {
  console.log(`Does ${petName} want some treats??????`);
};

const pets = ['Charlie!', 'Coda', 'Cadence', 'Molly', 'Joyce', 'Charlie', 'Dioji'];

// loopThroughArray(pets, function(petName) {
//   console.log(`Does ${petName} want some treats??????`);
// });

pets.forEach(function(petName) {
  console.log(`Does ${petName} want some treats? (using forEach)`);
});

// loopThroughArray([1,2,3], function(num) {
//   console.log(num * 3);
// });
