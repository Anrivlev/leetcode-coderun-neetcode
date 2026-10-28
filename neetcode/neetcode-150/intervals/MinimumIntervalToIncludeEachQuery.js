import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} queries
   * @return {number[]}
   */
  minInterval(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const sortedQueries = queries
      .map((query, index) => [query, index])
      .sort((a, b) => a[0] - b[0]);
    const output = new Array(queries.length).fill(-1);
    const minHeap = new MinPriorityQueue((value) => value.length);

    let i = 0;
    for (let [query, index] of sortedQueries) {
      while (i < intervals.length && intervals[i][0] <= query) {
        const length = intervals[i][1] - intervals[i][0] + 1;
        minHeap.enqueue({
          length,
          index: i,
        });
        i++;
      }
      while (
        minHeap.size() > 0 &&
        intervals[minHeap.front().index][1] < query
      ) {
        minHeap.dequeue();
      }
      if (minHeap.size() === 0) continue;

      const shortestIntervalLength = minHeap.front().length;
      output[index] = shortestIntervalLength;
    }

    return output;
  }
}

console.log(
  new Solution().minInterval(
    [
      [4, 5],
      [5, 8],
      [1, 9],
      [8, 10],
      [1, 6],
    ],
    [7, 9, 3, 9, 3],
  ),
);

console.log(
  new Solution().minInterval(
    [
      [1, 3],
      [2, 3],
      [3, 7],
      [6, 6],
    ],
    [2, 3, 1, 7, 6, 8],
  ),
);
