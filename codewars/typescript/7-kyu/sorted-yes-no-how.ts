/*
  Sorted? yes? no? how?
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/580a4734d6df748060000045
*/

export function isSortedAndHow(arr: number[]): string {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      isAscending = false;
    }

    if (arr[i - 1] < arr[i]) {
      isDescending = false;
    }

    if (!isAscending && !isDescending) {
      return "no";
    }
  }

  if (isAscending) {
    return "yes, ascending";
  }

  return "yes, descending";
}
