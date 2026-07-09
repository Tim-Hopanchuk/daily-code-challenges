/*
  Backspaces in string
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
*/

export function cleanString(str: string): string {
  let result = "";

  for (const char of str) {
    if (char === "#") {
      result = result.slice(0, result.length - 1);
      continue;
    }
    
    result += char;
  }

  return result;
}
