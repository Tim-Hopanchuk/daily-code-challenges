/*
  Find the vowels
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5680781b6b7c2be860000036
*/

export function vowelIndices(word: string): number[] {
  const indexes: number[] = [];

  for (let i = 0; i < word.length; i++) {
    if (/[aeiouy]/i.test(word[i])) {
      indexes.push(i + 1);
    }
  }

  return indexes;
}
