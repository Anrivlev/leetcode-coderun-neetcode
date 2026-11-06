// class Solution {
//   /**
//    * n**2 solution + n memory.
//    * @param {number[]} nums
//    * @return {number}
//    */
//   jump(nums) {
//     const jumpCount = new Array(nums.length).fill(Infinity);
//     jumpCount[0] = 0;
//     for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       for (let j = i + 1; j < i + num + 1 && j < nums.length; j++) {
//         jumpCount[j] = Math.min(jumpCount[j], jumpCount[i] + 1);
//       }
//     }
//     return jumpCount.at(-1);
//   }
// }

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  jump(nums) {
    if (nums.length <= 1) return 0;
    let jumpCount = 0;
    let left = 0;
    let right = 0;
    let nextRight = 1;
    while (right < nums.length - 1) {
      for (let i = left; i <= right; i++) {
        if (i + nums[i] > nextRight) nextRight = i + nums[i];
      }
      jumpCount++;
      left = right + 1;
      right = nextRight;
    }
    return jumpCount;
  }
}

console.log(new Solution().jump([2, 4, 1, 1, 1, 1]));
