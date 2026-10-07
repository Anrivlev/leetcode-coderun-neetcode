class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let islandCount = 0;

    const n = grid.length;
    const m = grid[0].length;

    const visited = Array.from({ length: n }, () => new Array(m).fill(false));

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    function dfs(i, j) {
      islandCount++;
      const stack = [{ i, j }];
      while (stack.length > 0) {
        const curr = stack.pop();
        visited[curr.i][curr.j] = true;
        if (grid[curr.i][curr.j] === "0") continue;
        for (const direction of directions) {
          const nextI = curr.i + direction[0];
          const nextJ = curr.j + direction[1];
          if (
            nextI < 0 ||
            nextJ < 0 ||
            nextI >= n ||
            nextJ >= m ||
            visited[nextI][nextJ]
          )
            continue;
          stack.push({ i: nextI, j: nextJ });
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (visited[i][j]) continue;
        if (grid[i][j] === "0") {
          visited[i][j] = true;
          continue;
        }
        dfs(i, j);
      }
    }

    return islandCount;
  }
}

console.log(
  new Solution().numIslands([
    ["0", "1", "1", "1", "0"],
    ["0", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);
