/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = []
  this.minstack = [Infinity]      // 因为pop()操作可能会pop掉最小元素，故用数组来存
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  this.minstack.push(Math.min(this.minstack[this.minstack.length - 1], val))   // 判断当前栈内最小值和新元素谁更小，谁更小则push谁
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minstack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minstack[this.minstack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// @lc code=end

