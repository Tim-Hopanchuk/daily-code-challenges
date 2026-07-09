/*
  Alternate capitalization
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075
*/

export function capitalize(str: string): [string, string] {
  let evenCharsCapitalized = "";
  let oddCharsCapitalized = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCharsCapitalized += str[i].toUpperCase();
      oddCharsCapitalized += str[i].toLowerCase();
    } else {
      evenCharsCapitalized += str[i].toLowerCase();
      oddCharsCapitalized += str[i].toUpperCase();
    }
  }

  return [evenCharsCapitalized, oddCharsCapitalized];
}
