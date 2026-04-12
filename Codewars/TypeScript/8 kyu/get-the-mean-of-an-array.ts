/*
  Get the mean of an array
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/563e320cee5dddcf77000158
*/

export function getAverage(marks: number[]): number {
  const result = Math.floor(
    marks.reduce((sum, current) => sum + current, 0) / marks.length,
  );

  return result;
}
