import { MinPriorityQueue, MaxPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {character[]} tasks
   * @param {number} n
   * @return {number}
   */
  leastInterval(tasks, n) {
    const frequencies = new Map();
    for (const task of tasks) {
      const frequency = frequencies.get(task) ?? 0;
      frequencies.set(task, frequency + 1);
    }

    const taskQueue = new MaxPriorityQueue();
    const cooldownQueue = new MinPriorityQueue((value) => value.time);
    for (const task of frequencies.values()) {
      taskQueue.enqueue(task);
    }

    let time = 0;
    while (taskQueue.size() > 0 || cooldownQueue.size() > 0) {
      while (cooldownQueue.size() > 0 && cooldownQueue.front().time < time) {
        const task = cooldownQueue.dequeue();
        taskQueue.enqueue(task.count);
      }
      if (taskQueue.size() > 0) {
        const task = taskQueue.dequeue();
        if (task > 1) {
          cooldownQueue.enqueue({ time: time + n, count: task - 1 });
        }
      }
      time++;
    }

    return time;
  }
}

console.log(new Solution().leastInterval(["X", "X", "Y", "Y"], 2));
