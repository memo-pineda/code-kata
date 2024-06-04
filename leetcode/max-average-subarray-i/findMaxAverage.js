/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let numToRemove = 0;
  let numToAdd = k;
  let maxSoFar = nums.slice(0, k).reduce((acc, next) => acc + next, 0);
  let currSum = maxSoFar;

  while (numToAdd < nums.length) {
      let newAvg = currSum - nums[numToRemove] + nums[numToAdd];
      currSum = newAvg;
      maxSoFar = Math.max(newAvg, maxSoFar);
      numToRemove++;
      numToAdd++;
  }

  return maxSoFar / k;
};