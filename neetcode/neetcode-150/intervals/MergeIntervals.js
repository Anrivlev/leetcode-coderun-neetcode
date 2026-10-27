class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    let curr = null;
    let i = 0;
    while (i < sortedIntervals.length) {
      if (!curr) {
        curr = sortedIntervals[i];
      } else if (!this.isIntersected(curr, sortedIntervals[i])) {
        mergedIntervals.push(curr);
        curr = sortedIntervals[i];
      } else {
        curr[1] = Math.max(curr[1], sortedIntervals[i][1]);
      }
      i++;
    }
    if (curr) mergedIntervals.push(curr);
    return mergedIntervals;
  }

  isIntersected(a, b) {
    return a[0] <= b[1] && a[1] >= b[0];
  }
}
