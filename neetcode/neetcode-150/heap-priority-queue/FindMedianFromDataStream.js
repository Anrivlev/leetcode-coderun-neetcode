export { MinPriorityQueue, MaxPriorityQueue } from "datastructures-js";

class MedianFinder {
  constructor() {
    this.minQueue = new MinPriorityQueue();
    this.maxQueue = new MaxPriorityQueue();
  }

  /**
   *
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    const minSizeQueue =
      this.minQueue.size() < this.maxQueue.size()
        ? this.minQueue
        : this.maxQueue;
    minSizeQueue.enqueue(num);

    this.balance();
  }

  balance() {
    if (this.minQueue.size() === 0 || this.maxQueue.size() === 0) return;
    while (this.minQueue.front() < this.maxQueue.front()) {
      const fromMin = this.minQueue.dequeue();
      const fromMax = this.maxQueue.dequeue();
      this.maxQueue.enqueue(fromMin);
      this.minQueue.enqueue(fromMax);
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.minQueue.size() === this.maxQueue.size())
      return (this.minQueue.front() + this.maxQueue.front()) / 2;
    return this.minQueue.size() > this.maxQueue.size()
      ? this.minQueue.front()
      : this.maxQueue.front();
  }
}
