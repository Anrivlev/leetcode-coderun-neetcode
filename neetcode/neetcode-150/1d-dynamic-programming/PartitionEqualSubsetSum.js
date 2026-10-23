class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    if (nums.length < 2) return false;
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    if (sum % 2 !== 0) return false;
    const halfSum = sum / 2;
    nums.sort((a, b) => a - b);

    const stack = [{ sum: 0, index: 0 }];
    while (stack.length > 0) {
      const curr = stack.pop();
      for (let i = curr.index; i < nums.length; i++) {
        const sum = curr.sum + nums[i];
        if (sum > halfSum) break;
        if (sum === halfSum) return true;
        stack.push({ sum, index: i + 1 });
      }
    }
    return false;
  }
}

console.log(new Solution().canPartition([2, 2]));
console.log(new Solution().canPartition([2, 3]));
console.log(new Solution().canPartition([2, 4, 2]));
