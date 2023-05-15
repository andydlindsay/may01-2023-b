"use strict";

/* Question 00

Write a converter that will change Celsius to Fahrenheit and vice versa.

Your function should take in a number, and a boolean.
The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false).
Your answer should be rounded to one decimal place, and returned as a Number, not a string.

If the first argument is not a number, return NaN for the result.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

*/

const tempConverter = function(value, cToF) {
  if (typeof value !== 'number') {
    return NaN;
  }

  // if cToF => (0°C × 9/5) + 32 = 32°F
  const fahrenheit = (value * 9/5) + 32; // BEDMAS PEDMAS

  // if !cToF => (32°F − 32) × 5/9 = 0°C
  const celcius = (value - 32) * 5/9;

  if (cToF) {
    return Number(fahrenheit.toFixed(1));
  } 
  
  return Number(celcius.toFixed(1));
};


// Don't change below:

module.exports = { tempConverter };
