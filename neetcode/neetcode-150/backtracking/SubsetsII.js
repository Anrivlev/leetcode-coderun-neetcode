class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsetsWithDup(nums) {
    const frequencies = new Map();
    for (const num of nums) {
      frequencies.set(num, (frequencies.get(num) ?? 0) + 1);
    }
    const res = [[]];

    for (const [value, count] of frequencies.entries()) {
      const resLength = res.length;
      for (let i = 0; i < resLength; i++) {
        let prev = res[i];
        for (let i = 0; i < count; i++) {
          const next = prev.slice();
          next.push(value);
          prev = next;
          res.push(next);
        }
      }
    }

    return res;
  }
}
