class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);

    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
      const temperature = temperatures[i];
      while (stack.length > 0 && stack.at(-1).temperature < temperature) {
        const prev = stack.pop();
        result[prev.index] = i - prev.index;
      }
      stack.push({ temperature, index: i });
    }

    return result;
  }
}
