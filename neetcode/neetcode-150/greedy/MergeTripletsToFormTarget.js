class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, target) {
    const bestResult = new Array(target.length).fill(-Infinity);

    for (const triplet of triplets) {
      if (triplet.some((value, index) => value > target[index])) continue;

      for (let i = 0; i < bestResult.length; i++) {
        bestResult[i] = Math.max(bestResult[i], triplet[i]);
      }

      if (bestResult.every((value, index) => value === target[index]))
        return true;
    }
    return false;
  }
}
