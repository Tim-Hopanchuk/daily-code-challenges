/*
  75. Sort Colors
  
  Difficulty: Medium
  Topics: Array, Two Pointers, Sorting, Quicksort, Bubble Sort
  Runtime: 0 ms
  Memory:  53.94 MB

  Link: https://leetcode.com/problems/sort-colors
*/

function sortColors(nums: (0 | 1 | 2)[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      const temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;

      low++;
      mid++;
      continue;
    }

    if (nums[mid] === 1) {
      mid++;
      continue;
    }

    if (nums[mid] === 2) {
      const temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;

      high--;
      continue;
    }
  }
}

/*
  Alternatives:

  function sortColors(nums: number[]): void {
    let pass = 0;

    while (pass < nums.length - 1) {
      let isSorted = true;

      for (let i = 1; i < nums.length - pass; i++) {
        if (nums[i - 1] > nums[i]) {
          isSorted = false;

          const temp = nums[i - 1];
          nums[i - 1] = nums[i];
          nums[i] = temp;
        }
      }

      if (isSorted) {
        break;
      }

      pass++;
    }
  }

  function sortColors(nums: (0 | 1 | 2)[]): void {
    const counts = {
      "0": 0,
      "1": 0,
      "2": 0,
    };

    for (let num of nums) {
      counts[num]++;
    }

    let i = 0;
    
    while (counts[0] > 0) {
      nums[i] = 0;
      counts[0]--;
      i++;
    }

    while (counts[1] > 0) {
      nums[i] = 1;
      counts[1]--;
      i++;
    }

    while (counts[2] > 0) {
      nums[i] = 2;
      counts[2]--;
      i++;
    }
  }
*/
