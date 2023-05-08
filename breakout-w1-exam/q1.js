/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // set aside space in memory to hold the lowest value seen
  let lowestValue = arr[0];

  // loop through the provided array
  arr.forEach((num) => {
    // is this the lowest value we've seen so far
    if (num < lowestValue) {
      // if yes, update lowest value with current element
      lowestValue = num;
    }
  });

  // return the lowest value seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set aside space in memory to hold highest value seen
  let highestValue = arr[0];

  // loop through the provided arr
  arr.forEach((num) => {
    // is this element higher than our highest value seen
    if (num > highestValue) {
      // if yes, update highest value seen with current element
      highestValue = num;
    }
  });

  // return highest value
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
