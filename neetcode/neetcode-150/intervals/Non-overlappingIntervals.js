class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let intervalsToEraseCount = 0;
    let currRightBorder = -Infinity;
    for (const interval of intervals) {
      if (interval[0] >= currRightBorder) {
        currRightBorder = interval[1];
        continue;
      }
      intervalsToEraseCount++;
    }
    return intervalsToEraseCount;
  }

  isOverlapping(a, b) {
    return a[0] < b[1] && a[1] > b[0];
  }
}
