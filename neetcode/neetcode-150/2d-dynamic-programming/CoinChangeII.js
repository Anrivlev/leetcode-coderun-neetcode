class Solution {
  /**
   * @param {number} amount
   * @param {number[]} coins
   * @return {number}
   */
  change(amount, coins) {
    const row = new Array(amount + 1).fill(0);
    row[0] = 1;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      for (let j = 1; j <= amount; j++) {
        row[j] += row[j - coin] ?? 0;
      }
    }
    return row.at(-1);
  }
}

console.log(new Solution().change(4, [1, 2, 3]));
