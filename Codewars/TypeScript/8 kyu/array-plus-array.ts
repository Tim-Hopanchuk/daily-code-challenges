/*
  Array plus array
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
*/

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const result = [...arr1, ...arr2].reduce((sum, current) => sum + current, 0);

  return result;
};
