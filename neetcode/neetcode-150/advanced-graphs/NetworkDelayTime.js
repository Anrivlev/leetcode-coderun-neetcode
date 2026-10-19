import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {number[][]} times
   * @param {number} n
   * @param {number} k
   * @return {number}
   */
  networkDelayTime(times, n, k) {
    if (times.length === 0) return 0;

    const neighbours = Array.from({ length: n }, () => []);
    for (const [u, v, t] of times) {
      neighbours[u - 1].push({ source: u - 1, target: v - 1, time: t });
    }

    const timesToReach = new Array(n).fill(-1);

    const queue = new MinPriorityQueue((value) => value.time);
    queue.enqueue({ node: k - 1, time: 0 });

    while (queue.size() > 0) {
      const curr = queue.dequeue();
      if (timesToReach[curr.node] !== -1) continue;
      timesToReach[curr.node] = curr.time;
      for (const neighbour of neighbours[curr.node]) {
        queue.enqueue({
          node: neighbour.target,
          time: curr.time + neighbour.time,
        });
      }
    }

    let maxTimeToReach = 0;
    for (const timeToReach of timesToReach) {
      if (timeToReach === -1) return -1;
      if (timeToReach > maxTimeToReach) maxTimeToReach = timeToReach;
    }

    return maxTimeToReach;
  }
}

console.log(
  new Solution().networkDelayTime(
    [
      [1, 2, 1],
      [2, 3, 1],
      [1, 4, 4],
      [3, 4, 1],
    ],
    4,
    1,
  ),
);
