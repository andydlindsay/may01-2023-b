/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;

  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // return arr.reduce((runningTotal, num) => {
  //   return runningTotal + num;
  // }, 0);

  return arr.reduce((a, c) => a + c, 0);
  // return arr.reduce((a, c) => {
  //   a[c] = 1;
  //   return a;
  // }, {});

  // set aside space in memory to keep track of the running total
  let runningTotal = 0;

  // loop through the provided array
  for (const num of arr) {
    // take each element and add to running total
    runningTotal += num;
    // runningTotal = runningTotal + num;
  }

  // return the running total
  return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// 3.14158
// 314.158
// 314
// 3.14

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
  // if (!arr.length) {
    return null;
  }

  // avg = totalValue / numOfElements
  const totalValue = sum(arr);
  const numOfElements = count(arr);

  const avg = totalValue / numOfElements;

  return round(avg);
};

// Don't change below:
module.exports = { count, sum, mean };
