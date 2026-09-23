class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    const splitIndex = this.getSplitIndex(nums);
    let left, right;
    if (target <= nums.at(-1)) {
      left = splitIndex;
      right = nums.length - 1;
    } else {
      left = 0;
      right = splitIndex - 1;
    }

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return nums[left] === target ? left : -1;
  }

  getSplitIndex(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < nums[right]) right = mid;
      else left = mid + 1;
    }
    return left;
  }
}

console.log(new Solution().search([3, 4, 5, 6, 1, 2], 1));
console.log(new Solution().search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(new Solution().search([3, 1], 3));
console.log(new Solution().search([1, 3], 3));
