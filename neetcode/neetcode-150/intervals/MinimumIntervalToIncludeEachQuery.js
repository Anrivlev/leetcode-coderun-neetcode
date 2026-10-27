const { MinPriorityQueue } = require("datastructures-js");

class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} queries
   * @return {number[]}
   */
  minInterval(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    queries.sort((a, b) => a[0] - b[0]);
    const output = new Array(queries.length).fill(-1);
    let i = 0;
    let j = 0;
    const minHeap = new MinPriorityQueue((value) => value.length);
    while (j < queries.length) {
      const interval = intervals[i];
      const query = queries[j];
      if (interval[1] < query) {
        i++;
        continue;
      }
      if (interval[0] > query) {
        
        j++;
        continue;
      }
      const length = interval[1] - interval[0];
      minHeap.enqueue({ length, i });
      //   output[j] = Math.min(output[j], interval[1] - interval[0]);
      // как дальше итерироваться?
    }
    return output;
  }
}
