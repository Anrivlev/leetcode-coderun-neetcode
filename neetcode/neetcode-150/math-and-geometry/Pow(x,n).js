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

class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;

    let remainingDegree = Math.abs(n);
    let result = 1;
    while (remainingDegree > 0) {
      if (remainingDegree % 2 === 1) {
        result *= x;
      }
      x *= x;
      remainingDegree = Math.floor(remainingDegree / 2);
    }

    return n > 0 ? result : 1 / result;
  }
}

console.log(new Solution().myPow(2, 5));
