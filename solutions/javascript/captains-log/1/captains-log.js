// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let id = 1000 + Math.floor(Math.random() * (9999 - 1000));
  return "NCC-" + id;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * 1000 + 41000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const type = ["D", "H", "J", "K", "L", "M", "N", "R",
               "T", "Y"];
  return type[Math.floor(Math.random() * 10)];
}
