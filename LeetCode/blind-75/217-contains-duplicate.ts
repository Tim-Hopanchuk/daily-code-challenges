/*
  217. Contains Duplicate
  
  Difficulty: Easy
  Topics: Array, Hash Table, Sorting
  Runtime: 18 ms
  Memory: 74.56 MB

  Link: https://leetcode.com/problems/contains-duplicate?envType=problem-list-v2&envId=oizxjoit
*/

function containsDuplicate(nums: number[]): boolean {
  const visitedNums = new Set<number>();

  for (const num of nums) {
    if (visitedNums.has(num)) {
      return true;
    }

    visitedNums.add(num);
  }

  return false;
}

/*
  Alternatives:

  function containsDuplicate(nums: number[]): boolean {
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 1; i++) {
      if (sortedNums[i] === sortedNums[i + 1]) {
        return true;
      }
    }

    return false;
  }
  
  function containsDuplicate(nums: number[]): boolean {
    return nums.length > new Set(nums).size;
  }
*/
