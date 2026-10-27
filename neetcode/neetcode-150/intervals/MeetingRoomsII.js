/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a.start - b.start);
    const endTimes = new MinPriorityQueue();
    endTimes.enqueue(intervals[0].end);
    for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i];
      const minEndTime = endTimes.front();
      if (interval.start >= minEndTime) {
        endTimes.dequeue();
      }
      endTimes.enqueue(interval.end);
    }
    return endTimes.size();
  }
}

console.log(
  new Solution().minMeetingRooms([
    { start: 1, end: 5 },
    { start: 5, end: 10 },
    { start: 10, end: 15 },
    { start: 15, end: 20 },
  ]),
);
