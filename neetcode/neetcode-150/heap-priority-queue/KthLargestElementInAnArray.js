import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  findKthLargest(nums, k) {
    const heap = new MinPriorityQueue();
    for (const num of nums) {
      heap.enqueue(num);
      if (heap.size() > k) heap.dequeue();
    }
    return heap.front();
  }
}
