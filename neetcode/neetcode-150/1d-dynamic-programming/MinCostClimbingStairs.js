class Solution {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    if (cost.length < 2) return 0;
    let minCost1 = cost[0];
    let minCost2 = cost[1];
    for (let i = 2; i < cost.length; i++) {
      const next = Math.min(minCost1, minCost2) + cost[i];
      minCost1 = minCost2;
      minCost2 = next;
    }
    return Math.min(minCost1, minCost2);
  }
}

console.log(new Solution().minCostClimbingStairs([1, 2, 3]));
console.log(new Solution().minCostClimbingStairs([1, 2, 1, 2, 1, 1, 1]));
