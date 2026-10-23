class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const lengths = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] > nums[i])
          lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
    return Math.max(...lengths);
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const lengths = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (nums[i] > nums[j])
          lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
    return Math.max(...lengths);
  }
}

console.log(new Solution().lengthOfLIS([1, 2, 3]));
console.log(new Solution().lengthOfLIS([3, 2, 1]));
console.log(new Solution().lengthOfLIS([3, 2, 2]));
console.log(new Solution().lengthOfLIS([3, 2, 3]));
