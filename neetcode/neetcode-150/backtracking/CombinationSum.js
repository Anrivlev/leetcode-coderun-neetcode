class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target) {
    const res = [];
    const stack = [{ arr: [], sum: 0, index: 0 }];

    while (stack.length > 0) {
      const curr = stack.pop();
      for (let i = curr.index; i < nums.length; i++) {
        const num = nums[i];
        const sum = curr.sum + num;
        if (sum > target) continue;
        const arr = curr.arr.slice();
        arr.push(num);
        if (sum === target) res.push(arr);
        else stack.push({ arr, sum, index: i });
      }
    }

    return res;
  }
}
