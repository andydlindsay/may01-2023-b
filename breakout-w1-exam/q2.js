/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 0 1 2 3 4 5

// 6 / 2 = 3 - 1 = 2


const median = function(arr) {
  // sort the incoming array
  arr.sort();

  // calculate the middle index
  const middleIndex = Math.floor(arr.length / 2);

  // is the array even or odd length?
  if (arr.length % 2 === 0) {
    // even-length array
    const rightElement = arr[middleIndex];
    const leftElement = arr[middleIndex - 1];

    const sum = rightElement + leftElement;
    const avg = sum / 2;
    return avg;
  } else {
    // odd-length array
    // return the element associated with the middle index
    return arr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
