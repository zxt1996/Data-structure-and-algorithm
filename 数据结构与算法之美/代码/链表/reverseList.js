//206.反转单链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return null;
    
    let prev = null;
    let current = head;
    while(current){
        let next = current.next;
        if(!next){
            //到达结尾时，将地址存入head
            head = current;
        }
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return head;
};