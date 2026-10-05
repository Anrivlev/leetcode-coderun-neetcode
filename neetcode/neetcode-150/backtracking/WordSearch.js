class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    if (word.length < 1) return true; // хз, спорный случай

    const visited = Array.from({ length: board.length }, () =>
      new Array(board[0].length).fill(false),
    );

    function backtrack(i, j, index) {
      if (visited[i][j]) return false;
      visited[i][j] = true;
      const char = word[index];
      if (board[i][j] !== char) {
        visited[i][j] = false;
        return false;
      }
      if (index === word.length - 1) return true;
      if (i > 0) {
        const isFound = backtrack(i - 1, j, index + 1);
        if (isFound) return true;
      }
      if (j > 0) {
        const isFound = backtrack(i, j - 1, index + 1);
        if (isFound) return true;
      }
      if (i < board.length - 1) {
        const isFound = backtrack(i + 1, j, index + 1);
        if (isFound) return true;
      }
      if (j < board[i].length - 1) {
        const isFound = backtrack(i, j + 1, index + 1);
        if (isFound) return true;
      }
      visited[i][j] = false;
    }

    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      for (let j = 0; j < row.length; j++) {
        const isFound = backtrack(i, j, 0);
        if (isFound) return true;
      }
    }

    return false;
  }
}
