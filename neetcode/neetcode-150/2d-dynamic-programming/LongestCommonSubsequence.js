class Solution {
  /**
   * @param {string} text1
   * @param {string} text2
   * @return {number}
   */
  longestCommonSubsequence(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const dp = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const isEqual = text1[i] === text2[j];
        dp[i][j] = Math.max(
          (dp[i - 1]?.[j - 1] ?? 0) + (isEqual ? 1 : 0),
          dp[i - 1]?.[j] ?? 0,
          dp[i][j - 1] ?? 0,
        );
      }
    }
    return dp.at(-1).at(-1);
  }
}
