/*
  Switcheroo
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57f759bb664021a30300007d
*/

export function switcheroo(str: string): string {
  str = str.replaceAll("a", "t"); // "t" – temp char
  str = str.replaceAll("b", "a");
  str = str.replaceAll("t", "b");

  return str;
}
