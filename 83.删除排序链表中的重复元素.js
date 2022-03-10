/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {

  let temp = head   // 用temp来进行指针的移动，最后返回head
  while (temp) {
    if (!temp.next) {  // 如果下一步为null，直接退出循环
      break
    }
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next    // 如果当前值和下一个指针的值一样，跳过下一个指针
    } else {
      temp = temp.next
    }
  }

  return head
};
// @lc code=end

