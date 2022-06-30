/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const parent = new Map()   // 存放每一个节点的子节点到父节点映射
const visted = [];         // 存放p节点回到根节点访问过的节点，如果q往回走时遇到了p节点访问过的，这个节点就是最近公共祖先

// 获取每一个节点的子节点到父节点映射
function dfs(root) {
  if (root.left) {
    parent.set(root.left, root);
    dfs(root.left);
  }
  if (root.right) {
    parent.set(root.right, root);
    dfs(root.right);
  }
}

var lowestCommonAncestor = function (root, p, q) {
  dfs(root);

  while (p) {
    visted.push(p);
    p = parent.get(p);
  }

  while (q) {
    if (visted.includes(q)) {
      return q;
    }

    q = parent.get(q);
  }
};
// @lc code=end

