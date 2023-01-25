/**
 * The idea is to take half of Linked List and revert the other half.
 * Then compare the first half and reversed second half.
 * Use fast and slow pointers to get to the middle of list. Fast is 2x faster than slow.
 * When fast finishes traverse, slow should be on the middle element.
 */


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let result: ListNode | null = null;
    while (head !== null) {
        const temp: ListNode | null = head.next;
        head.next = result;
        result = head;
        head = temp;
    }

    return result;
 }

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // slow is now pointing to middle element in the list
    let temp: ListNode | null = reverseLinkedList(slow);

    while (temp !== null) {
        if (temp.val !== head.val) return false;
        temp = temp.next;
        head = head.next;
    }

    return true;
};