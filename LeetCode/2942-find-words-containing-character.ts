/*
  2942. Find Words Containing Character
  
  Difficulty: Easy
  Topics: Mid Level, Array, String, Biweekly Contest 118
  Runtime: 0 ms
  Memory: 59.18 MB

  Link: https://leetcode.com/problems/find-words-containing-character?envType=problem-list-v2&envId=array
*/

function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
}
