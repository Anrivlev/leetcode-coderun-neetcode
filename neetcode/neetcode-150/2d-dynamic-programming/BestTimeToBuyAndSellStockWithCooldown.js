class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    const n = prices.length;
    const dp = Array.from({ length: n + 1 }, () => [0, 0]);

    for (let i = n - 1; i >= 0; i--) {
      const buy = dp[i + 1][0] - prices[i];
      const cooldown = dp[i + 1][1];
      dp[i][1] = Math.max(buy, cooldown);

      const sell = i + 2 < n ? dp[i + 2][1] + prices[i] : prices[i];
      const cooldownSell = dp[i + 1][0];
      dp[i][0] = Math.max(sell, cooldownSell);
    }

    return dp[0][1];
  }
}
