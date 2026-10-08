class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    const n = heights.length;
    if (n === 0) return [];
    const m = heights[0].length;
    if (m === 0) return [];

    const isToPacific = Array.from({ length: n }, () =>
      new Array(m).fill(false),
    );
    const isToAtlantic = Array.from({ length: n }, () =>
      new Array(m).fill(false),
    );

    const pacificQueue = [];
    let head = 0;
    for (let i = 0; i < n; i++) {
      isToPacific[i][0] = true;
      pacificQueue.push([i, 0]);
    }
    for (let j = 1; j < m; j++) {
      isToPacific[0][j] = true;
      pacificQueue.push([0, j]);
    }

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    while (head < pacificQueue.length) {
      const curr = pacificQueue[head++];
      for (const direction of directions) {
        const i = curr[0] + direction[0];
        const j = curr[1] + direction[1];
        if (
          i < 0 ||
          j < 0 ||
          i >= n ||
          j >= m ||
          isToPacific[i][j] ||
          heights[i][j] < heights[curr[0]][curr[1]]
        )
          continue;
        isToPacific[i][j] = true;
        pacificQueue.push([i, j]);
      }
    }

    const answer = [];

    const atlanticQueue = [];
    head = 0;
    for (let i = 0; i < n; i++) {
      isToAtlantic[i][m - 1] = true;
      atlanticQueue.push([i, m - 1]);
    }
    for (let j = 0; j < m - 1; j++) {
      isToAtlantic[n - 1][j] = true;
      atlanticQueue.push([n - 1, j]);
    }

    while (head < atlanticQueue.length) {
      const curr = atlanticQueue[head++];
      for (const direction of directions) {
        const i = curr[0] + direction[0];
        const j = curr[1] + direction[1];
        if (
          i < 0 ||
          j < 0 ||
          i >= n ||
          j >= m ||
          isToAtlantic[i][j] ||
          heights[i][j] < heights[curr[0]][curr[1]]
        )
          continue;
        isToAtlantic[i][j] = true;
        atlanticQueue.push([i, j]);
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (isToPacific[i][j] && isToAtlantic[i][j]) answer.push([i, j]);
      }
    }

    return answer;
  }
}

console.log(
  new Solution().pacificAtlantic([
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6],
  ]),
);

console.log(new Solution().pacificAtlantic([[1], [1]]));
