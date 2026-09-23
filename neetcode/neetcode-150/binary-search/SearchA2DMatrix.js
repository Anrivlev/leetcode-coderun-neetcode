class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    const rowIndex = this.getRowIndex(matrix, target);
    if (rowIndex === -1) return false;
    const row = matrix[rowIndex];

    let left = 0;
    let right = row.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (row[mid] === target) return true;
      if (row[mid] > target) right = mid;
      else left = mid + 1;
    }
    return false;
  }

  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {number}
   */
  getRowIndex(matrix, target) {
    let left = 0;
    let right = matrix.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (matrix[mid][0] <= target && matrix[mid].at(-1) >= target) return mid;
      if (matrix[mid].at(-1) > target) right = mid;
      else left = mid + 1;
    }
    return -1;
  }
}

console.log(
  new Solution().searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);

console.log(new Solution().searchMatrix([[1]], 2));
