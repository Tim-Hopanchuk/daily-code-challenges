/*
  Meeting
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/59df2f8f08c6cec835000012
*/

export function meeting(str: string): string {
  const names = str
    .toUpperCase()
    .split(";")
    .map((value) => `(${value.split(":")[1]}, ${value.split(":")[0]})`)
    .sort()
    .join("");

  return names;
}
