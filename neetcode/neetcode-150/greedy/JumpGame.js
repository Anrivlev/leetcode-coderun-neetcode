class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let maxIndex = 0;
    let i = 0;
    while (i <= maxIndex && i < nums.length) {
      maxIndex = Math.max(maxIndex, i + nums[i]);
      i++;
    }
    console.log(maxIndex, nums.length);
    return maxIndex >= nums.length - 1;
  }
}

console.log(new Solution().canJump([1, 2, 0, 1, 0]));
