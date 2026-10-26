class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // Общая идея верна, реализация не до конца правильная. Когда вернусь к теме, решу заново.
    // let maxProfitIfSoldYesterday = 0;
    // let maxProfitIfNot = 0;
    // let buyPriceIfSoldYesterday = prices[0];
    // let buyPriceIfNot = prices[0];
    // for (let i = 1; i < prices.length; i++) {
    //   const price = prices[i];
    //   if (price > buyPrice) {
    //     maxProfitIfSoldYesterday = maxProfitIfNot + price - buyPrice;
    //     maxProfitIfNot = Math.max(maxProfitIfNot, maxProfitIfSoldYesterday);
    //     buyPrice = price;
    //   } else {
    //     buyPriceIfNot = price;
    //     buyPriceIfSoldYesterday = price;
    //   }
    // }
    // return Math.max(maxProfitIfNot, maxProfitIfSoldYesterday);
  }
}
