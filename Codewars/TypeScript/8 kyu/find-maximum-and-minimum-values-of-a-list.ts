/*
  Find Maximum and Minimum Values of a List
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/577a98a6ae28071780000989
*/

export const min = (arr: number[]): number => {
  return Math.min(...arr);
};

export const max = (arr: number[]): number => {
  return Math.max(...arr);
};
