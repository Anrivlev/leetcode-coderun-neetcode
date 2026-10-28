class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    let carry = 0;
    let sum = 0;
    for (let i = 0; i < 32; i++) {
      const aBit = (a >> i) & 1;
      const bBit = (b >> i) & 1;
      let sumBit = aBit ^ bBit ^ carry;
      carry = (aBit & bBit) | (aBit & carry) | (bBit & carry);
      if (sumBit) sum |= 1 << i;
    }

    if (sum > 0x7fffffff) sum = ~(sum ^ 0xffffffff);

    return sum;
  }
}
