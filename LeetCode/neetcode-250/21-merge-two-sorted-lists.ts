/*
  21. Merge Two Sorted Lists
  
  Difficulty: Easy
  Topics: Linked List, Recursion
  Runtime: 2 ms
  Memory:  58.49 MB

  Link: https://leetcode.com/problems/merge-two-sorted-lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let head: ListNode | null = null;

  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let tail = head;

  while (list1 || list2) {
    if (!list1) {
      tail.next = list2;
      break;
    }

    if (!list2) {
      tail.next = list1;
      break;
    }

    if (list1.val < list2.val) {
      tail.next = list1;
      tail = tail.next;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    }
  }

  return head;
}
