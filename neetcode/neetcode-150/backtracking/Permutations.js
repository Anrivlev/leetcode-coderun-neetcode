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

    backtrack(curr);

    return res;
  }
}
