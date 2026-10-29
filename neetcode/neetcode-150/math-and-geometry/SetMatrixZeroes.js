class Solution {
  /**
   * Первое решение не сработало.
   * @param {number[][]} matrix
   * @return {void}
   */
  setZeroes(matrix) {
    const m = matrix.length;
    if (m === 0) return;
    const n = matrix[0].length;
    if (n === 0) return;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== 0) continue;
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }

    for (let i = 0; i < m; i++) {
      if (matrix[i][0] !== 0) continue;
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }

    for (let j = 0; j < n; j++) {
      if (matrix[0][j] !== 0) continue;
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
}

const m1 = [
  [1, 2, 3],
  [4, 0, 5],
  [6, 7, 8],
];
new Solution().setZeroes(m1);
console.log(m1);
