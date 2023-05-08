/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create the piles

  // set aside space in memory to hold our piles
  const piles = {};

  // loop through the provided array
  for (const num of arr) {
    // have we seen this element before?
    if (!piles[num]) {
      // if no, we need to add a new key/value pair to piles
      piles[num] = 1;
    } else {
      // if yes, increment the number of times seen
      piles[num] += 1;
    }
  }

  // console.log piles
  // console.log(piles);

  // compare the piles
  let highestValue = 0;
  let highestKey = null;

  // loop through the piles object keys
  for (const key in piles) {
    // retrieve the value associated with that key
    const value = piles[key];

    // is this value higher than our current highest?
    if (value > highestValue) {
      // if yes, replace the value of current highest
      highestValue = value;
      // and replace the value of highest key
      highestKey = key;
    }
  }

  // return the key that had the highest value associated with it
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
