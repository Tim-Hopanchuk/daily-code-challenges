/*
  242. Valid Anagram
  
  Difficulty: Easy
  Topics: Hash Table, String, Sorting
  Runtime: 10 ms
  Memory: 57.59 MB


  Link: https://leetcode.com/problems/valid-anagram?envType=problem-list-v2&envId=oizxjoit
*/

function isAnagram(str1: string, str2: string): boolean {
  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  const counts = new Map<string, number>();

  for (let i = 0; i < str1.length; i++) {
    counts.set(str1[i], (counts.get(str1[i]) ?? 0) + 1);
    counts.set(str2[i], (counts.get(str2[i]) ?? 0) - 1);
  }

  for (const char of counts.keys()) {
    if (counts.get(char) !== 0) {
      return false;
    }
  }

  return true;
}

/*
  Alternatives:
  
  function isAnagram(str1: string, str2: string): boolean {
    if (str1 === str2) {
      return true;
    }

    if (str1.length !== str2.length) {
      return false;
    }

    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }

  function isAnagram(str1: string, str2: string): boolean {
    if (str1 === str2) {
      return true;
    }

    if (str1.length !== str2.length) {
      return false;
    }

    const countsStr1 = new Map<string, number>();
    const countsStr2 = new Map<string, number>();

    for (let i = 0; i < str1.length; i++) {
      countsStr1.set(str1[i], (countsStr1.get(str1[i]) ?? 0) + 1);
      countsStr2.set(str2[i], (countsStr2.get(str2[i]) ?? 0) + 1);
    }

    for (const char of countsStr1.keys()) {
      if (countsStr1.get(char) !== countsStr2.get(char)) {
        return false;
      }
    }

    return true;
  }
*/
