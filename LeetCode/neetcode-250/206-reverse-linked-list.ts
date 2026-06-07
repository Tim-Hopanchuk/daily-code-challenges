/*
  206. Reverse Linked List
  
  Difficulty: Easy
  Topics: Linked List, Recursion
  Runtime: 0 ms
  Memory: 58.37 MB

  Link: https://leetcode.com/problems/reverse-linked-list
*/

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let current = head;
  let next = head?.next;
  current.next = null;

  while (next) {
    const buffer = next.next;
    next.next = current;
    current = next;
    next = buffer;
  }

  return current;
}
