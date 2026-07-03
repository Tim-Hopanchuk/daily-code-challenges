/*
  169. Majority Element
  
  Difficulty: Easy
  Topics: Array, Hash Table, Divide and Conquer, Sorting, Counting
  Runtime: 0 ms
  Memory: 58.17 MB

  Link: https://leetcode.com/problems/majority-element
*/

// Boyer–Moore majority vote algorithm

function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
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

  function majorityElement(nums: number[]): number {
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
*/
