import { MinPriorityQueue } from "datastructures-js";

class Solution {
  /**
   * @param {number[]} hand
   * @param {number} groupSize
   * @return {boolean}
   */
  isNStraightHand(hand, groupSize) {
    if (hand.length === 0 || groupSize === 0 || hand.length % groupSize !== 0)
      return false;
    hand.sort((a, b) => a - b);
    const handQueue = new MinPriorityQueue((value) => value.at(-1));
    let remainingEmptyHandCount = hand.length / groupSize;

    for (const card of hand) {
      let possibleHand = handQueue.dequeue();
      if (
        !possibleHand ||
        (possibleHand.length !== 0 && possibleHand.at(-1) !== card - 1)
      ) {
        if (remainingEmptyHandCount === 0) return false;
        if (possibleHand) handQueue.enqueue(possibleHand);
        possibleHand = [];
        remainingEmptyHandCount--;
      }
      possibleHand.push(card);
      if (possibleHand.length < groupSize) handQueue.enqueue(possibleHand);
    }
    return true;
  }
}

console.log(new Solution().isNStraightHand([1, 2, 4, 2, 3, 5, 3, 4], 4));
console.log(new Solution().isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
