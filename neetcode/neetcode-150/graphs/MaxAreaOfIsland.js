class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    const n = grid.length;
    if (n === 0) return 0;
    const m = grid[0].length;
    if (m === 0) return 0;

    let maxArea = 0;

    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 0) continue;
        const stack = [[i, j]];
        let currArea = 0;
        while (stack.length > 0) {
          const curr = stack.pop();
          if (grid[curr[0]][curr[1]] === 0) continue;
          currArea++;
          grid[curr[0]][curr[1]] = 0;
          for (const direction of directions) {
            const next = [curr[0] + direction[0], curr[1] + direction[1]];
            if (next[0] < 0 || next[1] < 0 || next[0] >= n || next[1] >= m)
              continue;
            stack.push(next);
          }
        }
        if (currArea > maxArea) maxArea = currArea;
      }
    }

    return maxArea;
  }
}

console.log(
  new Solution().maxAreaOfIsland([
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
  ]),
);
