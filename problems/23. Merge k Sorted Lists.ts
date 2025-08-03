import { ListNode } from "../classes/ListNode.js";
import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const dummy = new ListNode();
    const minHeap = new MinPriorityQueue<ListNode>((node) => node.val);

    lists.forEach((head) => {
        if (head) minHeap.enqueue(head);
    })

    let curr = dummy;
    while (minHeap.size() > 0) {
        const lowestNode = minHeap.dequeue()!;
        curr.next = lowestNode; 
        curr = curr.next;
        if (lowestNode.next) minHeap.enqueue(lowestNode.next);
    }

    return dummy.next;
};
