// 19.删除链表的倒数第N个节点

// 而是使用两个节点，一个是first一个是second。
// 先让first走n步，然后再让first和second同时往前走，
// 当first走到头时，second即是倒数第n+1个节点了。
// 要注意的是可能是要删除第一个节点，这个时候可以直接返回head -> next

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head === null){
        return head;
    }
    
    let fast = head;
    let slow = head;
    while(n>0){
        fast = fast.next;
        n--;
    }
    
    if(fast===null){
        return head.next;
    }
    
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return head;
};