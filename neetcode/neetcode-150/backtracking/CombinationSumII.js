class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    const frequencies = new Map();
    for (const candidate of candidates) {
      const frequency = frequencies.get(candidate) ?? 0;
      frequencies.set(candidate, frequency + 1);
    }
    const candidatesUnique = Array.from(frequencies.entries());

    const res = [];
    const stack = [{ arr: [], sum: 0, index: 0 }];

    while (stack.length > 0) {
      const curr = stack.pop();
      for (let i = curr.index; i < candidatesUnique.length; i++) {
        const candidate = candidatesUnique[i];
        for (let j = 0; j < candidate[1]; j++) {
          const sum = curr.sum + candidate[0] * (j + 1);
          if (sum > target) continue;
          const arr = curr.arr.slice();
          for (let k = 0; k <= j; k++) {
            arr.push(candidate[0]);
          }
          if (sum === target) res.push(arr);
          else {
            const index = i + 1;
            if (index < candidatesUnique.length) stack.push({ arr, sum, index });
          }
        }
      }
    }

    return res;
  }
}
