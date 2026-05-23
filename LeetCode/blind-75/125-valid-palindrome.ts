/*
  125. Valid Palindrome
  
  Difficulty: Easy
  Topics: Two Pointers, String
  Runtime: 5 ms
  Memory: 58.97 MB

  Link: https://leetcode.com/problems/valid-palindrome
*/

function isPalindrome(str: string): boolean {
  let i = 0;
  let j = str.length - 1;
  const regexp = /[a-z0-9]/i;

  while (j > i) {
    if (!regexp.test(str[i])) {
      i++;
      continue;
    }

    if (!regexp.test(str[j])) {
      j--;
      continue;
    }

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

/*
  Alternatives:

  function isPalindrome(strRaw: string): boolean {
    const str = strRaw.toLowerCase().replaceAll(/[^a-z0-9]/g, "");

    return str === str.split("").reverse().join("");
  }
*/
