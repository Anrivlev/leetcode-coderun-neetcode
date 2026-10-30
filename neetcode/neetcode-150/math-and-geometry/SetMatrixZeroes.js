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

    const rows = new Array(m).fill(false);
    const columns = new Array(n).fill(false);

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== 0) continue;
        rows[i] = true;
        columns[j] = true;
      }
    }

    for (let i = 0; i < m; i++) {
      if (!rows[i]) continue;
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }

    for (let j = 0; j < n; j++) {
      if (!columns[j]) continue;
      for (let i = 0; i < m; i++) {
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
