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
      destinations.sort();
    }

    const itinerary = ["JFK"];

    const usedTickets = new Set();

    const dfs = (node) => {
      const destinations = adjacents.get(node);
      if (
        !destinations ||
        destinations.length === 0 ||
        usedTickets.size === tickets.length
      ) {
        return usedTickets.size === tickets.length;
      }

      for (const destination of destinations) {
        const ticketCode = node + destination;
        if (usedTickets.has(ticketCode)) continue;
        usedTickets.add(ticketCode);
        itinerary.push(destination);

        if (dfs(destination)) return true;

        usedTickets.delete(ticketCode);
        itinerary.pop();
      }

      return false;
    };

    const root = adjacents.get("JFK");
    if (!root) return [];

    if (!dfs("JFK")) return [];

    return itinerary;
  }
}

console.log(
  new Solution().findItinerary([
    ["BUF", "HOU"],
    ["HOU", "SEA"],
    ["JFK", "BUF"],
  ]),
);

console.log(
  new Solution().findItinerary([
    ["HOU", "JFK"],
    ["SEA", "JFK"],
    ["JFK", "SEA"],
    ["JFK", "HOU"],
  ]),
);
