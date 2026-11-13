class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  findTargetSumWays(nums, target) {
    let prevMap = new Map();
    prevMap.set(0, 1);
    let currMap;

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      currMap = new Map();
      for (const [sum, count] of prevMap.entries()) {
        currMap.set(sum + num, (currMap.get(sum + num) ?? 0) + count);
        currMap.set(sum - num, (currMap.get(sum - num) ?? 0) + count);
      }
      prevMap = currMap;
    }

    return prevMap.get(target) ?? 0;
  }
}
