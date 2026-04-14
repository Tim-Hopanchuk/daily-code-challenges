/*
  Find the capitals
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/539ee3b6757843632d00026b
*/

export function capitals(word: string): number[] {
  const result: number[] = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  
  return result;
}
