class Solution {
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    const m = board.length;
    if (m === 0) return;
    const n = board[0].length;
    if (n === 0) return;

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    const unSurroundedRegions = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== "O") continue;
        const region = [[i, j]];
        const stack = [[i, j]];
        board[i][j] = "#";
        let isSurrounded = !(i === 0 || j === 0 || i === m - 1 || j === n - 1);
        while (stack.length > 0) {
          const curr = stack.pop();
          for (const direction of directions) {
            const i = curr[0] + direction[0];
            const j = curr[1] + direction[1];
            if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== "O")
              continue;
            region.push([i, j]);
            board[i][j] = "#";
            stack.push([i, j]);
            if (i === 0 || j === 0 || i === m - 1 || j === n - 1)
              isSurrounded = false;
          }
        }
        if (isSurrounded)
          for (const [i, j] of region) {
            board[i][j] = "X";
          }
        else unSurroundedRegions.push(region);
      }
    }
    for (const region of unSurroundedRegions) {
      for (const [i, j] of region) {
        board[i][j] = "O";
      }
    }
  }
}
