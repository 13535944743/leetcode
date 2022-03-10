/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let str = []
  let flag = false    // true表示有进位
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum
    if (i < 0) {
      sum = flag ? (b[j] - 0) + 1 : (b[j] - 0)
      flag = sum >= 2 ? true : false
    } else if (j < 0) {
      sum = flag ? (a[i] - 0) + 1 : (a[i] - 0)
      flag = sum >= 2 ? true : false
    } else {
      sum = flag ? (b[j] - 0) + (a[i] - 0) + 1 : (b[j] - 0) + (a[i] - 0)
      flag = sum >= 2 ? true : false
    }

    sum = sum >= 2 ? sum - 2 : sum
    str.unshift(sum.toString())
  }

  if (flag) {
    str.unshift(1)
  }

  return str.join('')
};
// @lc code=end

