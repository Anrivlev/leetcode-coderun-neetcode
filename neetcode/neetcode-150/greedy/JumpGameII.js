class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  jump(nums) {
    const jumpCount = new Array(nums.length).fill(Infinity);
    jumpCount[0] = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      for (let j = i + 1; j < i + num + 1 && j < nums.length; j++) {
        jumpCount[j] = Math.min(jumpCount[j], jumpCount[i] + 1);
      }
    }
    return jumpCount.at(-1);
  }
}
