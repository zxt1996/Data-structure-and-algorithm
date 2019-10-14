// 21.合并两个有序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    let a = l1;
    let b = l2;
    let resultList = undefined;
    if(a.val < b.val){
        resultList = a;
        a = a.next;
    }else{
        resultList = b;
        b = b.next;
    }
    
    let currentNode = resultList;
    while(a != null && b != null){
        if(a.val < b.val){
            currentNode.next = a;
            a = a.next;
        }else{
            currentNode.next = b;
            b = b.next;
        }
        currentNode = currentNode.next;
    }
    
    if(a != null){
        currentNode.next = a;
    }else{
        currentNode.next = b;
    }
    
    return resultList;
};

