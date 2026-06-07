/*
  28. Find the Index of the First Occurrence in a String
  
  Difficulty: Easy
  Topics: Two Pointers, String, String Matching
  Runtime: 290 ms
  Memory: 54.7 MB

  Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string?envType=problem-list-v2&envId=string
*/

function strStr(haystack: string, needle: string): number {
  next: for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          continue next;
        }
      }

      return i;
    }
  }

  return -1;
}
