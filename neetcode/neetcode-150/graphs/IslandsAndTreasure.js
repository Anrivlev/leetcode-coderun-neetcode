class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const INF = 2147483647; // 2**31

    const n = grid.length;
    if (n === 0) return;
    const m = grid[0].length;
    if (m === 0) return;

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] !== 0) continue;
        const stack = [{ row: i, column: j, distance: 0 }];
        while (stack.length > 0) {
          const { row, column, distance } = stack.pop();
          if (grid[row][column] < distance) continue;
          grid[row][column] = distance;
          for (const direction of directions) {
            const nextRow = row + direction[0];
            const nextColumn = column + direction[1];
            if (
              nextRow < 0 ||
              nextColumn < 0 ||
              nextRow >= n ||
              nextColumn >= m ||
              grid[nextRow][nextColumn] < distance + 1
            )
              continue;
            stack.push({
              row: nextRow,
              column: nextColumn,
              distance: distance + 1,
            });
          }
        }
      }
    }
  }
}

console.log(
  new Solution().islandsAndTreasure([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ]),
);
