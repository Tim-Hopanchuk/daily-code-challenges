/*
  238. Product of Array Except Self
  
  Difficulty: Medium
  Topics: Array, Prefix Sum
  Runtime: 6 ms
  Memory: 68.7 MB

  Link: https://leetcode.com/problems/product-of-array-except-self
*/

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [1];
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

/*
  Alternatives:

  function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;

    const leftProducts: number[] = new Array(n);
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    const rightProducts: number[] = new Array(n);
    rightProducts[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
      rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
  }
*/
