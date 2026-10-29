class Solution {
  /**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  spiralOrder(matrix) {
    const m = matrix.length;
    if (m === 0) return [];
    const n = matrix[0].length;
    if (n === 0) return [];

    const size = m * n;

    const answer = new Array();

    let li = 0;
    let lj = 0;
    let ri = m;
    let rj = n;
    while (answer.length < size) {
      // left to right
      for (let j = lj; j < rj; j++) {
        answer.push(matrix[li][j]);
      }
      if (answer.length === size) break;

      // top to bottom
      for (let i = li + 1; i < ri; i++) {
        answer.push(matrix[i][rj - 1]);
      }
      if (answer.length === size) break;

      // right to left
      for (let j = rj - 2; j >= lj; j--) {
        answer.push(matrix[ri - 1][j]);
      }
      if (answer.length === size) break;

      // bottom to top
      for (let i = ri - 2; i > li; i--) {
        answer.push(matrix[i][lj]);
      }
      li++;
      lj++;
      ri--;
      rj--;
    }

    return answer;
  }
}

console.log(
  new Solution().spiralOrder([
    [1, 2],
    [4, 3],
  ]),
);
