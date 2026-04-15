/*
  Even numbers in an array
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
*/

export function evenNumbers(arr: number[], n: number): number[] {
  let result: number[] = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }

    if (result.length === n) {
      return result.reverse();
    }
  }

  return result; 
}
