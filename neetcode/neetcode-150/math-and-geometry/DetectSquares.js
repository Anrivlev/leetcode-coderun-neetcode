class CountSquares {
  constructor() {
    // x -> y -> count
    this.pointIndex = new Map();
  }

  /**
   * @param {number[]} point
   * @return {void}
   */
  add(point) {
    let sameX = this.pointIndex.get(point[0]);
    if (!sameX) {
      sameX = new Map();
      this.pointIndex.set(point[0], sameX);
    }
    const countSameXSameY = sameX.get(point[1]) ?? 0;
    sameX.set(point[1], countSameXSameY + 1);
  }

  /**
   * @param {number[]} point
   * @return {number}
   */
  count(point) {
    const sameX = this.pointIndex.get(point[0]);
    if (!sameX) return 0;
    let total = 0;
    for (const [p1y, p1yCount] of sameX.entries()) {
      if (p1y === point[1]) continue;
      const sideLength = p1y - point[1];
      const p2x1 = point[0] - sideLength;
      const p2x2 = point[0] + sideLength;
      for (const p2x of [p2x1, p2x2]) {
        const p2xPoints = this.pointIndex.get(p2x);
        if (!p2xPoints) continue;
        const p2PointCount = p2xPoints.get(p1y);
        const p3PointCount = p2xPoints.get(point[0]);
        total += p1yCount * p2PointCount * p3PointCount;
      }
    }
    return total;
  }
}
