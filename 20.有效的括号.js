/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  let len = s.length
  let pair = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  if (len % 2 !== 0) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === '[' || s[i] === '{') {
      arr.push(s[i])
    } else {
      if (pair[s[i]] === arr[arr.length - 1]) {
        arr.pop()
      } else {
        return false
      }
    }
  }

  if (arr.length === 0) {
    return true
  }

  return false
};
// @lc code=end

