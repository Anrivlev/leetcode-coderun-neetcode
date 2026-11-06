class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    if (nums.length === 0) return 0;
    let maxSum = -Infinity;
    let currSum = 0;
    for (const num of nums) {
      currSum = Math.max(currSum + num, num);
      if (currSum > maxSum) maxSum = currSum;
    }
    return maxSum;
  }
}
