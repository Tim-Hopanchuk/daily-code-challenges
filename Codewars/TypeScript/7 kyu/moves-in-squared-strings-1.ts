/*
  Moves in squared strings (I)
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
*/

export function vertMirror(str: string) {
  return str
    .split("\n")
    .map((value) => value.split("").reverse().join(""))
    .join("\n");
}

export function horMirror(str: string) {
  return str.split("\n").reverse().join("\n");
}

export function oper(fc: (str: string) => string, str: string) {
  return fc(str);
}
