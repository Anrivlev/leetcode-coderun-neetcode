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
    nums.sort((a, b) => b - a);

    let currSum = 0;
    const backtrack = (i) => {
      const num = nums[i];
      if (currSum + num > halfSum) return false;
      currSum += num;
      if (currSum === halfSum) return true;

      for (let j = i + 1; j < nums.length; j++) {
        if (backtrack(j)) return true;
      }

      currSum -= num;

      return false;
    };

    for (let i = 0; i < nums.length; i++) {
      if (backtrack(i)) return true;
    }
    return false;
  }
}

console.log(new Solution().canPartition([2, 2]));
console.log(new Solution().canPartition([2, 3]));
console.log(new Solution().canPartition([2, 4, 2]));
