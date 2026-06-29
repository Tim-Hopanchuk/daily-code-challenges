/*
  49. Group Anagrams
  
  Difficulty: Medium
  Topics: Array, Hash Table, String, Sorting
  Runtime: 18 ms
  Memory:  69.23 MB

  Link: https://leetcode.com/problems/group-anagrams
*/

function groupAnagrams(strs: string[]): string[][] {
  const signatures = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    let value = signatures.get(key);

    if (!value) {
      value = [];
    }

    value.push(str);
    signatures.set(key, value);
  }

  return Array.from(signatures.values());
}

/*
  Alternatives:

  function groupAnagrams(strs: string[]): string[][] {
    const sortedStrs = strs.sort((a, b) => a.length - b.length);
    const processedIndices: number[] = [];
    const groupedAnagrams: string[][] = [];

    const strSignatures = new Map<string, string>();
    for (let word of sortedStrs) {
      strSignatures.set(word, word.split("").sort().join(""));
    }

    outer: for (let i = 0; i < sortedStrs.length; i++) {
      if (processedIndices.includes(i)) {
        continue;
      }

      const baseWord = sortedStrs[i];

      groupedAnagrams.push([baseWord]);

      for (let j = i + 1; j < sortedStrs.length; j++) {
        if (processedIndices.includes(j)) {
          continue;
        }

        const candidateWord = sortedStrs[j];

        if (baseWord.length !== candidateWord.length) {
          continue outer;
        }

        if (strSignatures.get(baseWord) === strSignatures.get(candidateWord)) {
          groupedAnagrams[groupedAnagrams.length - 1].push(candidateWord);
          processedIndices.push(j);
        }
      }
    }

    return groupedAnagrams;
  }
*/
