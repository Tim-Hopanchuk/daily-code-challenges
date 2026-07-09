/*
  Encrypt this!
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/5848565e273af816fb000449
*/

export const encryptThis = (str: string): string => {
  if (str === "") {
    return "";
  }
  
  const result: string = str
    .split(" ")
    .map((word) => {
      const chars = word.split("");
      const buffer = chars[1];

      chars[0] = String(chars[0].charCodeAt(0));
      chars[1] = chars[chars.length - 1];
      chars[chars.length - 1] = buffer;

      return chars.join("");
    })
    .join(" ");

  return result;
};
