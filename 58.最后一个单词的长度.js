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
  let flag = false

  for (let i = s.length - 1; i >= 0; i--) {
    if (flag && s[i] !== ' ') {
      count++;
    } else if (s[i] !== ' ') {
      flag = true
      count++;
    } else if (flag) {
      break
    } else {
      continue
    }
  }

  return count
};
// @lc code=end

