/*
  altERnaTIng cAsE <=> ALTerNAtiNG CaSe
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/56efc695740d30f963000557
*/

export function toAlternatingCase(str: string): string {
  let result = "";

  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
      continue;
    }
    
    result += char.toLowerCase();
  }

  return result;
}
