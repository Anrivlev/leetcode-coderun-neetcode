class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    if (n === 0) return 1;
    let degree = 1;
    let remainingDegree = Math.abs(n);
    let result = x;
    let current = x;
    while (remainingDegree > 1) {
      while (degree * 2 < remainingDegree) {
        degree *= 2;
        current *= current;
      }
      result *= current;
      current = x;
      remainingDegree -= degree;
      degree = 1;
    }
    return n > 0 ? result : 1 / result;
  }
}

console.log(new Solution().myPow(2, 5));