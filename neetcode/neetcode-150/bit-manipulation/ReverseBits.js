class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number} - a positive integer
   */
  reverseBits(n) {
    let reversed = 0;
    for (let i = 31; i >= 0; i--) {
      reversed += (n & 1) << i;
      n >>= 1;
    }
    return reversed >>> 0;
  }
}

console.log(
  new Solution().reverseBits(0b00000000000000000000000000010101).toString(2),
);
