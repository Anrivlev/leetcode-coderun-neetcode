import { MinPriorityQueue } from "datastructures-js";

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinPriorityQueue();
    for (const num of nums) this.add(num);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.heap.enqueue(val);
    if (this.heap.size() > this.k) this.heap.dequeue();
    return this.heap.front();
  }
}

console.log(new KthLargest(2, [1, 2, 3]).add(4));
