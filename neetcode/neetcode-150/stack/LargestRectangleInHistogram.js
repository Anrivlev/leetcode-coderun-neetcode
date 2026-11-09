class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let maxArea = 0;

    const left = Array.from(
      { length: heights.length },
      (value, index) => index,
    );
    const right = left.slice();

    let stack = [];
    for (let i = 0; i < heights.length; i++) {
      const height = heights[i];
      let furthestIndex = i;
      while (stack.length > 0 && heights[stack.at(-1)] >= height) {
        furthestIndex = stack.pop();
      }
      left[i] = left[furthestIndex];
      stack.push(i);
    }

    stack = [];
    for (let i = heights.length - 1; i >= 0; i--) {
      const height = heights[i];
      let furthestIndex = i;
      while (stack.length > 0 && heights[stack.at(-1)] >= height) {
        furthestIndex = stack.pop();
      }
      right[i] = right[furthestIndex];
      stack.push(i);
    }

    return heights.reduce(
      (acc, height, index) =>
        Math.max(acc, height * (right[index] - left[index] + 1)),
      0,
    );
  }
}

console.log(new Solution().largestRectangleArea([7, 1, 7, 2, 2, 4]));
