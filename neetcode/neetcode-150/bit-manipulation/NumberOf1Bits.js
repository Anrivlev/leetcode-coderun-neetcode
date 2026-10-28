class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    let weight = 0;
    while (n > 0) {
      weight += n % 2 === 0 ? 0 : 1;
      n >>= 1;
    }
    return weight;
  }
}

console.log(new Solution().hammingWeight(1));
console.log(new Solution().hammingWeight(2));
console.log(new Solution().hammingWeight(3));
console.log(new Solution().hammingWeight(4));
