class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  findTargetSumWays(nums, target) {
    // const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    // if (totalSum === target) return 1;
    // if (totalSum < target) return 0;

    const dp = Array.from({ length: nums.length + 1 }, () => new Map());

    dp[0].set(0, 1);

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const sums = Array.from(dp[i].entries());
      for (const [sum, count] of sums) {
        dp[i + 1].set(sum + num, (dp[i + 1].get(sum + num) ?? 0) + count);
        dp[i + 1].set(sum - num, (dp[i + 1].get(sum - num) ?? 0) + count);
      }
    }

    return dp[nums.length].get(target) ?? 0;
  }
}
