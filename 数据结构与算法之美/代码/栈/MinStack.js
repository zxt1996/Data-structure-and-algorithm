// 155.最小栈
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.onlytemp = [];
 };
 
 /** 
  * @param {number} x
  * @return {void}
  */
 MinStack.prototype.push = function(x) {
     this.onlytemp.push(x);
 };
 
 /**
  * @return {void}
  */
 MinStack.prototype.pop = function() {
     return this.onlytemp.pop();
 };
 
 /**
  * @return {number}
  */
 MinStack.prototype.top = function() {
     return this.onlytemp[this.onlytemp.length-1];
 };
 
 /**
  * @return {number}
  */
 MinStack.prototype.getMin = function() {
     let minnum = this.onlytemp[0];
     for(let i=1;i<this.onlytemp.length;i++){
         if(this.onlytemp[i]<minnum){
             minnum = this.onlytemp[i];
         }
     }
     return minnum;
 };
 
 /** 
  * Your MinStack object will be instantiated and called as such:
  * var obj = new MinStack()
  * obj.push(x)
  * obj.pop()
  * var param_3 = obj.top()
  * var param_4 = obj.getMin()
  */