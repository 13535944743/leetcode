/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null
  }

  // 递归下去
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  // 把子树翻转，之后一起迭代回去，等到所有子树都翻转后，整个二叉树也就翻转了
  root.left = right
  root.right = left

  return root
};
// @lc code=end

