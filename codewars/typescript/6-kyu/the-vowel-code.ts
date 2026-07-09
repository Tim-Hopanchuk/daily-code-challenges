/*
  The Vowel Code
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/53697be005f803751e0015aa
*/

export function encode(str: string): string {
  let result = "";

  for (const char of str) {
    switch (char) {
      case "a":
        result += "1";
        break;
      case "e":
        result += "2";
        break;
      case "i":
        result += "3";
        break;
      case "o":
        result += "4";
        break;
      case "u":
        result += "5";
        break;
      default:
        result += char;
        break;
    }
  }

  return result;
}

export function decode(str: string): string {
  let result = "";

  for (const char of str) {
    switch (char) {
      case "1":
        result += "a";
        break;
      case "2":
        result += "e";
        break;
      case "3":
        result += "i";
        break;
      case "4":
        result += "o";
        break;
      case "5":
        result += "u";
        break;
      default:
        result += char;
        break;
    }
  }

  return result;
}
