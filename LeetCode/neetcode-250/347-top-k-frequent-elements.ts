/*
  347. Top K Frequent Elements
  
  Difficulty: Medium
  Topics: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
  Runtime: 5 ms
  Memory: 68.5 MB

  Link: https://leetcode.com/problems/top-k-frequent-elements
*/

function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();
  for (const num of nums) {
    const currentCount = counts.get(num) ?? 0;
    counts.set(num, currentCount + 1);
  }

  const sortedEntries = Array.from(counts).sort((a, b) => b[1] - a[1]);

  const topK = [];
  for (let i = 0; i < k; i++) {
    topK.push(sortedEntries[i][0]);
  }

  return topK;
}
