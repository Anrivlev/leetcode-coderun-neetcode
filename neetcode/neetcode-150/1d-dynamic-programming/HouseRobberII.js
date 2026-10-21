class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    // if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let prev = 0;
    let prevPrev = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      const curr = Math.max(prev, prevPrev + nums[i]);
      prevPrev = prev;
      prev = curr;
    }
    const maxWithoutLast = prev;
    prev = 0;
    prevPrev = 0;
    for (let i = 1; i < nums.length; i++) {
      const curr = Math.max(prev, prevPrev + nums[i]);
      prevPrev = prev;
      prev = curr;
    }
    return Math.max(maxWithoutLast, prev);
  }
}
