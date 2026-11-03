class Solution {
  /**
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  multiply(num1, num2) {
    let product = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      const digit1 = +num1[i];
      for (let j = num2.length - 1; j >= 0; j--) {
        const digit2 = +num2[j];
        const degree = num1.length - i + num2.length - j - 2;
        product += digit1 * digit2 * 10 ** degree;
      }
    }

    return product.toString(10);
  }
}

console.log(new Solution().multiply("10", "30"));
