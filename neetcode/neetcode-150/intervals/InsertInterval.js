class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    if (intervals.length === 0) {
      intervals.push(newInterval);
      return intervals;
    }

    let deleteCount = 0;
    let startIndex = -1;
    let isInserted = false;

    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][1] < newInterval[0]) {
        if (i === intervals.length - 1 && !isInserted) {
          intervals.push(newInterval);
          return intervals;
        }
        continue;
      }
      if (intervals[i][0] > newInterval[1]) {
        if (!isInserted) intervals.splice(i, 0, newInterval);
        if (deleteCount) intervals.splice(startIndex + 1, deleteCount);
        return intervals;
      }
      if (startIndex === -1) {
        startIndex = i;
        intervals[i][0] = Math.min(intervals[i][0], newInterval[0]);
        intervals[i][1] = Math.max(intervals[i][1], newInterval[1]);
        isInserted = true;
      } else {
        intervals[startIndex][1] = Math.max(
          intervals[startIndex][1],
          intervals[i][1],
        );
        deleteCount++;
      }
    }
    intervals.splice(startIndex + 1, deleteCount);
    return intervals;
  }
}

console.log(
  new Solution().insert(
    [
      [1, 5],
      [2, 5],
    ],
    [1, 6],
  ),
);
console.log(
  new Solution().insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
