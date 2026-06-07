/*
  141. Linked List Cycle
  
  Difficulty: Easy
  Topics: Hash Table, Linked List, Two Pointers
  Runtime: 45 ms
  Memory: 57.9 MB

  Link: https://leetcode.com/problems/linked-list-cycle
*/

//  Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null | undefined = head;
  let fast: ListNode | null | undefined = head;

  while (fast) {
    slow = slow?.next;
    fast = fast.next?.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

/*
  Alternatives:

  function hasCycle(head: ListNode | null): boolean {
    const visited = new Set<ListNode>();

    while (head?.next) {
      visited.add(head);
      head = head.next;

      if (visited.has(head)) {
        return true;
      }
    }

    return false;
  }
*/
