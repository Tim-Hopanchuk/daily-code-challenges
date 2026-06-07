/*
  58. Length of Last Word
  
  Difficulty: Easy
  Topics: String
  Runtime: 0 ms
  Memory: 54.8 MB

  Link: https://leetcode.com/problems/length-of-last-word?envType=problem-list-v2&envId=string
*/

function lengthOfLastWord(str: string): number {
  let length = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && length === 0) {
      continue;
    }

    if (str[i] === " ") {
      break;
    }

    length++;
  }

  return length;
}
