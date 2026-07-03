/*
  27. Remove Element
  
  Difficulty: Easy
  Topics: Array, Two Pointers
  Runtime: 0 ms
  Memory:  55.21 MB

  Link: https://leetcode.com/problems/remove-element
*/

function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];

      j--;
      nums.length--;
      continue;
    }

    i++;
  }

  return nums.length;
}
