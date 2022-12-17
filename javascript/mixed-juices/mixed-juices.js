/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  //switch statement
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let lemonsCut = 0;
  let wedges = 0;
  while (wedgesNeeded > wedges && limes[0] !== undefined){
    switch (limes[0]) {
      case "small":
        wedges += 6;
        lemonsCut++;
        limes.shift();
        break;
      case "medium":
        wedges += 8;
        lemonsCut++;
        limes.shift();
        break;
      case "large":
        wedges += 10;
        lemonsCut++;
        limes.shift();
        break;
    }
  }
  return lemonsCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let totalTime = 0;
  while(totalTime < timeLeft){
    totalTime += timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
