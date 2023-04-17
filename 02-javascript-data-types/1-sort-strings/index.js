/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const [sortedArr, locales] = [[...arr], ["ru", "en"]];
  if (param === 'asc') {
    sortedArr.sort((a, b) => a.localeCompare(b, locales, {caseFirst: 'upper'}));
  } else if (param === 'desc') {
    sortedArr.sort((a, b) => a.localeCompare(b, locales, {caseFirst: 'upper'})).reverse();
  }
  return sortedArr;
}
