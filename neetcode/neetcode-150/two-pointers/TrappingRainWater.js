class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let total = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    while (left < right) {
      if (height[left] < height[right]) {
        left++;
        total += Math.max(Math.min(leftMax, rightMax) - height[left], 0);
        if (height[left] > leftMax) leftMax = height[left];
      } else {
        right--;
        total += Math.max(Math.min(leftMax, rightMax) - height[right], 0);
        if (height[right] > rightMax) rightMax = height[right];
      }
    }
    return total;
  }
}

console.log(new Solution().trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
console.log(new Solution().trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
