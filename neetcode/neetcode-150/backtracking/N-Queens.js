class Solution {
  /**
   * @param {number} n
   * @return {string[][]}
   */
  solveNQueens(n) {
    const answer = [];

    const board = Array.from({ length: n }, () => new Array(n).fill("."));
    const isQueenInColumn = new Array(n).fill(false);

    function isValidDiagonally(i, j) {
      for (let k = 1; k <= i; k++) {
        if (board[i - k][j - k] === "Q" || board[i - k][j + k] === "Q")
          return false;
      }
      return true;
    }

    function backtrack(i) {
      if (i === n) {
        answer.push(board.map((row) => row.join("")));
        return;
      }
      for (let j = 0; j < n; j++) {
        if (isQueenInColumn[j]) continue;
        if (!isValidDiagonally(i, j)) continue;
        board[i][j] = "Q";
        isQueenInColumn[j] = true;
        backtrack(i + 1);
        board[i][j] = ".";
        isQueenInColumn[j] = false;
      }
    }

    backtrack(0);

    return answer;
  }
}
