class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    for (const interval of sortedIntervals) {
      if (
        mergedIntervals.length === 0 ||
        !this.isIntersected(mergedIntervals.at(-1), interval)
      ) {
        mergedIntervals.push(interval);
      } else {
        mergedIntervals.at(-1)[1] = Math.max(
          mergedIntervals.at(-1)[1],
          interval[1],
        );
      }
    }
    return mergedIntervals;
  }

  isIntersected(a, b) {
    return a[0] <= b[1] && a[1] >= b[0];
  }
}
