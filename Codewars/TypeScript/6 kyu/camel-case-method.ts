/*
  CamelCase Method
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/587731fda577b3d1b0001196
*/

export function camelCase(str: string): string {
  const words: string[] = str.toLowerCase().split(" ");
  const result: string = words
    .map((value) => {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    })
    .join("");

  return result;
}
