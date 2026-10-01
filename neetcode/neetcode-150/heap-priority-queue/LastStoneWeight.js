const { MaxPriorityQueue } = require("datastructures-js");

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    const queue = new MaxPriorityQueue();
    for (const stone of stones) {
      queue.enqueue(stone);
    }
    while (queue.size() > 1) {
      const x = queue.dequeue();
      const y = queue.dequeue();
      const diff = x - y;
      if (diff === 0) continue;
      queue.enqueue(diff);
    }
    return queue.front() ?? 0;
  }
}
