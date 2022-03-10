/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let fin = 0
  let position = 0      // 当前位数,从后往前递增,如十进制123,3时是0,2时是1,1时是2
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let num = columnTitle[i].charCodeAt() - 65 + 1
    fin += num * Math.pow(26, position)
    position++
  }

  return fin
};

// @lc code=end

