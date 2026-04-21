// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));

  return num1 + num2;
}

export function luckyNumber(value) {
  const str = String(value);

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return luckyNumber(str.slice(1, -1));
}
  

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input.length === 0) {
    return "Required field";
  }
  if (Number.isNaN(Number(input)) || Number(input) === 0) {
    return "Must be a number besides 0";
  }
  return ""; 
}
