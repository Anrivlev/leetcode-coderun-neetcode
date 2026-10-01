import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  kClosest(points, k) {
    const queue = new MinPriorityQueue(
      (value) => value[0] ** 2 + value[1] ** 2,
    );
    for (const point of points) {
      queue.enqueue(point);
    }
    const answer = [];
    for (let i = 0; i < k; i++) {
      answer.push(queue.dequeue());
    }
    return answer;
  }
}

console.log(
  new Solution().kClosest(
    [
      [0, 2],
      [2, 0],
      [2, 2],
    ],
    2,
  ),
);
