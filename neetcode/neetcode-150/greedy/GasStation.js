class Solution {
  /**
   * 2 * n solution, const memory
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    if (gas.length === 0) return -1;
    if (gas.length === 1) return gas[0] - cost[0] >= 0 ? 0 : -1;
    let startIndex = 0;
    let gasCount = 0;
    let i = startIndex;
    let isSecondCircle = false;
    while (i < gas.length && (!isSecondCircle || i < startIndex)) {
      gasCount += gas[i];
      gasCount -= cost[i];
      if (gasCount < 0) {
        if (isSecondCircle) return -1;
        startIndex = i + 1;
        if (startIndex === gas.length) return -1;
        gasCount = 0;
      }
      i++;
      if (i === gas.length) {
        i = 0;
        isSecondCircle = true;
      }
    }
    return startIndex === i ? startIndex : -1;
  }
}

console.log(new Solution().canCompleteCircuit([1, 2, 3, 4], [2, 2, 4, 1]));
