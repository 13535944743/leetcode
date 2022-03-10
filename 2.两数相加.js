/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let flag = 0    // 用来代表进位，0代表没有进位，1代表有进位
  let l = new ListNode()
  let temp = l    // 暂存链表l，因为l会往后前进
  let first = true    // 判断是不是第一个节点

  while (l1 || l2) {    // 两个只要有一个不为空，就继续循环
    let sum = flag      // 先把进位算进去

    if (l1) {           // 如果l1、l2存在，则需要加上对应的值，并向后移
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum >= 10) {      // 判断和是否大于10，并决定是否对sum做出改变，以及是否有进位
      sum -= 10
      flag = 1
    } else {
      flag = 0
    }

    if (first) {    // 如果是第一个节点，则直接修改节点的val即可
      l.val = sum
      first = false
    } else {
      let newNode = new ListNode(sum)   // 如果不是第一个节点，则新增节点，并让l的next指向当前节点，同时让l也继续前进
      l.next = newNode
      l = l.next
    }
  }

  if (flag) {                     // 有可能会有l1、l2都遍历完了，但是还有进位没有处理
    let newNode = new ListNode(1)
    l.next = newNode
    l = l.next
  }

  return temp
};
// @lc code=end

