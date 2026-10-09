/*
  303. Range Sum Query - Immutable
  
  Difficulty: Easy
  Topics: Array, Design, Prefix Sum
  Runtime: 4 ms
  Memory: 64 MB

  Link: https://leetcode.com/problems/range-sum-query-immutable
*/

class NumArray {
  prefixSum: number[] = [0];

  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
  }

  sumRange(start: number, end: number): number {
    return this.prefixSum[end + 1] - this.prefixSum[start];
  }
}

/*
  Alternatives:

  class NumArray {
    nums: number[];

    constructor(nums: number[]) {
      this.nums = nums;
    }

    sumRange(start: number, end: number): number {
      let sum = 0;

      for (let i = start; i <= end; i++) {
        sum += this.nums[i];
      }

      return sum;
    }
  }
*/
