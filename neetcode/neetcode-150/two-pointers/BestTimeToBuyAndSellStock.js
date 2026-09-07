class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (prices.length < 2) return 0;
    let minPrice = prices[0];
    let bestProfit = 0;
    for (const price of prices) {
      const profit = price - minPrice;
      if (profit > bestProfit) bestProfit = profit;
      if (price < minPrice) minPrice = price;
    }
    return bestProfit;
  }
}
