/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let temp = head     // 暂存头节点，之后删除节点后，直接返回temp就行
  while (head) {
    if (head.next && head.next.val === val) {   // 当前节点的下一个节点符合条件时，需要让当前节点的next指针指向下一个节点的next，这样子就移除了符合条件的链表元素
      head.next = head.next.next
    } else if (head.val === val && head === temp) {   // 当头节点符合条件时，则是直接头节点指向next
      head = head.next
      temp = temp.next

    } else {
      head = head.next
    }
  }

  return temp
};
// @lc code=end

