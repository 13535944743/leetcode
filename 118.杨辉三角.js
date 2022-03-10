/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ret = []
  for (let i = 1; i <= numRows; i++) {
    let cur = new Array(i)
    cur[0] = 1
    cur[i - 1] = 1

    for (let j = 1; j < i - 1; j++) {
      cur[j] = ret[i - 2][j - 1] + ret[i - 2][j]
    }

    ret.push(cur)
  }

  return ret
};
// @lc code=end

