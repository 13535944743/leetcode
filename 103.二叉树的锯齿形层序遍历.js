/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  let flag = false;

  while (queue.length > 0) {

    const arr = [];
    let len = queue.length;

    while (len--) {
      let node = queue.shift();

      if (!flag) {
        arr.push(node.val);
      } else {
        arr.unshift(node.val)
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(arr);
    flag = !flag;
  }



  return result;
};
// @lc code=end
