class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  missingNumber(nums) {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    return expectedSum - sum;
  }
}
