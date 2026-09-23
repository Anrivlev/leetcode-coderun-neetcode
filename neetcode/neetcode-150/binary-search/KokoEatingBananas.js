class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    if (h < piles.length) return -1;
    let upperBound = Math.max(...piles);
    let lowerBound = 0;
    while (lowerBound < upperBound) {
      let mid = lowerBound + Math.floor((upperBound - lowerBound) / 2);
      if (this.isPossible(piles, h, mid)) upperBound = mid;
      else lowerBound = mid + 1;
    }
    return lowerBound;
  }

  /**
   * @param {number[]} piles
   * @param {number} h
   * @param {number} speed
   * @return {boolean}
   */
  isPossible(piles, h, speed) {
    let time = 0;
    for (const pile of piles) {
      time += Math.ceil(pile / speed);
      if (time > h) return false;
    }
    return true;
  }
}

console.log(new Solution().minEatingSpeed([1, 4, 3, 2], 9));
