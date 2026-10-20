class Solution {
  /**
   * @param {string[][]} tickets
   * @return {string[]}
   */
  findItinerary(tickets) {
    const adjacents = new Map();
    for (const [from, to] of tickets) {
      let destinations = adjacents.get(from);
      if (!destinations) {
        destinations = [];
        adjacents.set(from, destinations);
      }
      destinations.push(to);
    }

    for (const destinations of adjacents.values()) {
      destinations.sort().reverse();
    }

    const itinerary = [];
    const stack = ["JFK"];

    while (stack.length > 0) {
      const curr = stack.at(-1);
      const destinations = adjacents.get(curr);
      if (!destinations || destinations.length === 0)
        itinerary.push(stack.pop());
      else stack.push(destinations.pop());
    }

    return itinerary.reverse();
  }
}
