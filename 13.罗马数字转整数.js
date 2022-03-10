/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let luoma = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let fin = 0
  let len = s.length
  for (let i = 0; i < len; i++) {
    let left = luoma[s[i]]
    if (i + 1 < len && left < luoma[s[i + 1]]) {
      fin -= left     // 特殊情况是减
    } else {
      fin += left
    }
  }

  return fin
};
// @lc code=end

