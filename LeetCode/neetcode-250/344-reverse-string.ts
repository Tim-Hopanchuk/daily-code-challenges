/*
  344. Reverse String
  
  Difficulty: Easy
  Topics: Two Pointers, String
  Runtime: 0 ms
  Memory: 62.6 MB

  Link: https://leetcode.com/problems/reverse-string?envType=problem-list-v2&envId=string
*/

function reverseString(str: string[]): void {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];

    i++;
    j--;
  }
}
