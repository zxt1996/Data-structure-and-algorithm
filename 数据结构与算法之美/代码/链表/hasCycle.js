// 141.环形链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null){
        return false;
    }
    
    if(head.next === null){
        return false;
    }
    
    let slow = head,fast = head;
    
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};