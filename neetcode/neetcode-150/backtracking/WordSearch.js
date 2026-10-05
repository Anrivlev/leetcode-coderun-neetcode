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
      const char = word[index];
      if (board[i][j] !== char) {
        return false;
      }
      if (index === word.length - 1) return true;

      visited[i][j] = true;

      const options = [];
      if (i > 0) options.push([i - 1, j, index + 1]);
      if (j > 0) options.push([i, j - 1, index + 1]);
      if (i < board.length - 1) options.push([i + 1, j, index + 1]);
      if (j < board[i].length - 1) options.push([i, j + 1, index + 1]);

      for (const option of options) {
        const isFound = backtrack(...option);
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
