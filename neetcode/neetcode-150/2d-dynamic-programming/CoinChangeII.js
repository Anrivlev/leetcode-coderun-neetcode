class Solution {
  /**
   * @param {number} amount
   * @param {number[]} coins
   * @return {number}
   */
  change(amount, coins) {
    const dp = Array.from({ length: coins.length }, () =>
      new Array(amount + 1).fill(0),
    );
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      dp[i][0] = 1;
      for (let j = 1; j <= amount; j++) {
        dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i][j - coin] ?? 0);
      }
    }
    return dp.at(-1).at(-1);
  }
}

console.log(new Solution().change(4, [1, 2, 3]));
