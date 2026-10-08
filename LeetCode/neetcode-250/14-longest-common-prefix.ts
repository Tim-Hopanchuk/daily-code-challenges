/*
  14. Longest Common Prefix
  
  Difficulty: Easy
  Topics: Array, String, Trie
  Runtime: 0 ms
  Memory: 53.6 MB

  Link: https://leetcode.com/problems/longest-common-prefix?envType=problem-list-v2&envId=array
*/

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (const str of strs) {
    if (str.startsWith(prefix)) {
      continue;
    }

    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }

    if (prefix === "") {
      break;
    }
  }

  return prefix;
}

/*
  Alternatives:

  function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];

    nextPrefix: while (true) {
      for (const str of strs) {
        if (!str.startsWith(prefix)) {
          prefix = prefix.slice(0, prefix.length - 1);
          continue nextPrefix;
        }
      }

      return prefix;
    }
  }
*/
