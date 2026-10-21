class Solution {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    if (amount === 0) return 0;
    coins.sort((a, b) => b - a);
    const coinCounts = new Map();
    coinCounts.set(0, 0);

    const queue = [0];
    let head = 0;
    while (head < queue.length) {
      const currSum = queue[head++];
      const currCoinCount = coinCounts.get(currSum);

      for (const coin of coins) {
        const sum = currSum + coin;
        if (sum > amount || coinCounts.has(sum)) continue;
        if (sum === amount) return currCoinCount + 1;

        coinCounts.set(sum, currCoinCount + 1);
        queue.push(sum);
      }
    }
    return -1;
  }
}

console.log(new Solution().coinChange([1, 2], 2));
console.log(new Solution().coinChange([1, 3, 4], 6));
