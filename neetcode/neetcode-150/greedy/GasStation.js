class Solution {
  /**
   * 2 * n solution, const memory. my personal solution (something that came to my mind and i was able to write by myself)
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

class Solution {
  /**
   * more effective solution with ideas from proper solutions that can be found online
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    if (gas.length === 0 || gas.length !== cost.length) return -1;
    const totalGas = gas.reduce((prev, curr) => prev + curr, 0);
    const totalCost = cost.reduce((prev, curr) => prev + curr, 0);
    if (totalCost > totalGas) return -1;

    let startIndex = 0;
    let currGas = 0;
    for (let i = 0; i < gas.length; i++) {
      currGas += gas[i] - cost[i];
      if (currGas < 0) {
        currGas = 0;
        startIndex = i + 1;
      }
    }
    return startIndex;
  }
}

console.log(new Solution().canCompleteCircuit([1, 2, 3, 4], [2, 2, 4, 1]));
