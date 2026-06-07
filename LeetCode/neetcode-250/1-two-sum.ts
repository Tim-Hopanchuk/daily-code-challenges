/*
  1. Two Sum
  
  Difficulty: Easy
  Topics: Junior, Array, Hash Table
  Runtime: 3 ms
  Memory: 57.8 MB

  Link: https://leetcode.com/problems/two-sum?envType=problem-list-v2&envId=oizxjoit
*/

function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const addend = target - nums[i];

    if (numsMap.has(addend)) {
      return [i, numsMap.get(addend) as number];
    }

    numsMap.set(nums[i], i);
  }

  return [-1, -1];
}

/*
  Alternatives:

  function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      const addend = target - nums[i];
      const addendIndex = nums.indexOf(addend);

      if (addendIndex !== -1 && addendIndex !== i) {
        return [i, addendIndex];
      }
    }

    return [-1, -1];
  }
*/
