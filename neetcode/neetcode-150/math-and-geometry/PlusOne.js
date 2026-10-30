class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      const nextValue = digits[i] + carry;
      digits[i] = nextValue % 10;
      carry = nextValue === 10 ? 1 : 0;
      if (carry === 0) break;
    }
    if (carry === 1) digits.unshift(1);
    return digits;
  }
}
