class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let intervalsToEraseCount = 0;
    let currRightBorder = -Infinity;
    for (const interval of intervals) {
      if (interval[0] >= currRightBorder) {
        currRightBorder = interval[1];
        continue;
      }
      intervalsToEraseCount++;
      currRightBorder = Math.min(currRightBorder, interval[1]);
    }
    return intervalsToEraseCount;
  }

  isOverlapping(a, b) {
    return a[0] < b[1] && a[1] > b[0];
  }
}
