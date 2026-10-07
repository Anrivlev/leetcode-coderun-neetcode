class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    const n = grid.length;
    if (n === 0) return 0;
    const m = grid[0].length;
    if (m === 0) return 0;

    let freshFruitCount = 0;
    let elapsedTime = 0;

    const queue = [];
    let head = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        switch (grid[i][j]) {
          case 0:
            break;
          case 1: {
            freshFruitCount++;
            break;
          }
          case 2: {
            queue.push({ i, j, time: 0 });
            break;
          }
        }
      }
    }

    if (freshFruitCount === 0) return 0;

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    while (head < queue.length && freshFruitCount > 0) {
      const { i, j, time } = queue[head++];
      for (const direction of directions) {
        const next = {
          i: i + direction[0],
          j: j + direction[1],
          time: time + 1,
        };
        if (
          next.i < 0 ||
          next.j < 0 ||
          next.i >= n ||
          next.j >= m ||
          grid[next.i][next.j] !== 1
        )
          continue;
        if (next.time > elapsedTime) elapsedTime = next.time;
        grid[next.i][next.j] = 2;
        freshFruitCount--;
        queue.push(next);
      }
    }

    return freshFruitCount === 0 ? elapsedTime : -1;
  }
}
