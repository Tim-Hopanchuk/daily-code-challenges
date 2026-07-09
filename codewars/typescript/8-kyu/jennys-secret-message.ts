/*
  Jenny's secret message
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/55225023e1be1ec8bc000390
*/

export function greet(name: string): string {
  if (name === "Johnny") {
    return "Hello, my love!";
  }

  return "Hello, " + name + "!";
}
