class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    let curr = null;
    for (const interval of sortedIntervals) {
      if (!curr) {
        curr = interval;
      } else if (!this.isIntersected(curr, interval)) {
        mergedIntervals.push(curr);
        curr = interval;
      } else {
        curr[1] = Math.max(curr[1], interval[1]);
      }
    }
    if (curr) mergedIntervals.push(curr);
    return mergedIntervals;
  }

  isIntersected(a, b) {
    return a[0] <= b[1] && a[1] >= b[0];
  }
}
