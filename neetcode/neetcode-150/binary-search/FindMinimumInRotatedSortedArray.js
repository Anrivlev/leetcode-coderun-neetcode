class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < nums[right]) right = mid;
      else left = mid + 1;
    }
    return nums[left];
  }
}
