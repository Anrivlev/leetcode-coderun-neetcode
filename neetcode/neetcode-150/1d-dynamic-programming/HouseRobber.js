class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let maxPrev = Math.max(nums[0], nums[1]);
    let maxPrevPrev = nums[0];
    for (let i = 2; i < nums.length; i++) {
      const next = Math.max(maxPrevPrev + nums[i], maxPrev);
      maxPrevPrev = maxPrev;
      maxPrev = next;
    }

    return Math.max(maxPrev, maxPrevPrev);
  }
}
