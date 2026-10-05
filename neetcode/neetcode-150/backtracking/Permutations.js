class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    const res = [];
    const picked = new Array(nums.length).fill(false);

    let curr = [];

    function backtrack() {
      if (curr.length === nums.length) {
        res.push(curr.slice());
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (picked[i]) continue;
        curr.push(nums[i]);
        picked[i] = true;
        backtrack();
        curr.pop();
        picked[i] = false;
      }
    }

    backtrack();

    return res;
  }
}

class Solution {
  /**
   * Мое решение, чудовищно неэффективное, но собственное
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    let res = [[]];

    for (const num of nums) {
      const nextRes = [];
      for (const arr of res) {
        for (let i = 0; i <= arr.length; i++) {
          nextRes.push(arr.toSpliced(i, 0, num));
        }
      }
      res = nextRes;
    }

    return res;
  }
}
