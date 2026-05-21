/*
  242. Valid Anagram
  
  Difficulty: Easy
  Topics: Hash Table, String, Sorting
  Runtime: 29 ms
  Memory: 59.08 MB


  Link: https://leetcode.com/problems/valid-anagram?envType=problem-list-v2&envId=oizxjoit
*/

function isAnagram(str1: string, str2: string): boolean {
  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
