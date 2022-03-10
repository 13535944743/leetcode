/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0
  let len = s.length - 1

  while (s.charAt(len) === ' ') {
    len--   // 找出第一个不是空格的位置
  }

  for (; len >= 0; len--) {   // 开始计数，知道遇到空格，或反向遍历完
    if (s.charAt(len) === ' ') {
      break
    }
    count++
  }

  return count
};
// @lc code=end

