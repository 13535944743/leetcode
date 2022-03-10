/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }

  let result = ''

  let count = 2 * numRows - 2
  let limit = 0
  while (count != 0) {
    if (limit % count === 0) {
      result += s[limit]
    }
  }
};
// @lc code=end

