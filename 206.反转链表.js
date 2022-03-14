/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null              // 每次都存上一个指针
  let cur = head

  while (cur) {
    const next = cur.next   // 暂存next指针
    cur.next = pre          // 当前指针指向前一个指针

    pre = cur               // 继续遍历下去
    cur = next
  }

  return pre
};
// @lc code=end

