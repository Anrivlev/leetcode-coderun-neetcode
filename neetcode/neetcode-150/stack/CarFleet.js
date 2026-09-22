class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const cars = position.map((position, index) => ({
      position,
      speed: speed[index],
    }));
    cars.sort((a, b) => b.position - a.position);

    const stack = [];
    for (const car of cars) {
      const arrivalTime = (target - car.position) / car.speed;
      if (stack.length === 0 || arrivalTime > stack.at(-1))
        stack.push(arrivalTime);
    }
    return stack.length;
  }
}

console.log(new Solution().carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]));
