// 232.用栈实现队列

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.onlyqueue = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.onlyqueue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let respop = [];
    if(this.onlyqueue.length != 0){
        respop.push(this.onlyqueue[0]);
    }
    for(let i=0;i<this.onlyqueue.length-1;i++){
        this.onlyqueue[i] = this.onlyqueue[i+1];
    }
    this.onlyqueue[this.onlyqueue.length-1] = null;
    this.onlyqueue.length -= 1;
    return respop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.onlyqueue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.onlyqueue.length<=0){
        return true;
    }
    else{
        return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */