/*
  Grasshopper - Personalized Message
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5772da22b89313a4d50012f7
*/

export function greet(userName: string, ownerName: string): string {
  if (userName === ownerName) {
    return "Hello boss";
  }

  return "Hello guest";
}
