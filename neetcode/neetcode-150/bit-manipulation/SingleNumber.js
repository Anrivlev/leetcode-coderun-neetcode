class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  singleNumber(nums) {
    let xor = 0;
    for (const num of nums) {
      xor ^= num;
    }
    return xor;
  }
}
