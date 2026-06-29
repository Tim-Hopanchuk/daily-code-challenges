/*
  1929. Concatenation of Array
  
  Difficulty: Easy
  Topics: Mid Level, Array, Simulation, Weekly Contest 249
  Runtime: 0 ms
  Memory: 59.78 MB

  Link: https://leetcode.com/problems/concatenation-of-array
*/

function getConcatenation(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[nums.length + i] = nums[i];
  }

  return result;
}

/*
  Alternatives:

  function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums];
  }
*/
