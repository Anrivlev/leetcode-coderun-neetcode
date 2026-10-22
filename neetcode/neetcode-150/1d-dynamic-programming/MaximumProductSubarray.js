class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    if (nums.length === 0) return 0;
    let maxProduct = nums[0];
    let positiveProduct = nums[0];
    let negativeProduct = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      const numMulPositive = num * positiveProduct;
      const numMulNegative = num * negativeProduct;

      positiveProduct = Math.max(numMulPositive, num, numMulNegative);
      negativeProduct = Math.min(numMulPositive, num, numMulNegative);
      maxProduct = Math.max(maxProduct, positiveProduct, negativeProduct);
    }
    return maxProduct;
  }
}

console.log(new Solution().maxProduct([-4, -3, -2]));
