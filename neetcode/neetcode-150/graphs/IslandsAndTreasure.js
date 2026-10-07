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

    const queue = [];
    let head = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] !== 0) continue;
        queue.push({ i, j, distance: 0 });
      }
    }

    while (head < queue.length) {
      const { i, j, distance } = queue.at(head++);
      for (const direction of directions) {
        const nextI = i + direction[0];
        const nextJ = j + direction[1];
        const nextDistance = distance + 1;
        if (
          nextI < 0 ||
          nextJ < 0 ||
          nextI >= n ||
          nextJ >= m ||
          grid[nextI][nextJ] < nextDistance
        )
          continue;
        grid[nextI][nextJ] = nextDistance;
        queue.push({ i: nextI, j: nextJ, distance: nextDistance });
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
