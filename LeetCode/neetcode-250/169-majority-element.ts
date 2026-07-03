/*
  169. Majority Element
  
  Difficulty: Easy
  Topics: Array, Hash Table, Divide and Conquer, Sorting, Counting
  Runtime: 4 ms
  Memory: 59.4 MB

  Link: https://leetcode.com/problems/majority-element
*/

function majorityElement1(nums: number[]): number {
  const signatures = new Map<number, number>();

  for (const num of nums) {
    let count = (signatures.get(num) ?? 0) + 1;
    if (count > nums.length / 2) {
      return num;
    }

    signatures.set(num, count);
  }

  return nums[0];
}

/*
  Alternatives:

  function majorityElement(nums: number[]): number {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let count = 1;

    for (let i = 1; i < sortedNums.length; i++) {
      if (sortedNums[i] === sortedNums[i - 1]) {
        count++;
      } else {
        count = 1;
      }

      if (count > sortedNums.length / 2) {
        return sortedNums[i];
      }
    }

    return sortedNums[0];
  }

  function majorityElement(nums: number[]): number {
    const sortedNums = [...nums].sort((a, b) => a - b);

    return sortedNums[Math.floor(sortedNums.length / 2)];
  }
*/
