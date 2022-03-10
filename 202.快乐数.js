/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getSumSquare(num) {
    let sum = 0
    while (num !== 0) {
      sum += Math.pow(num % 10, 2)
      num = Math.floor(num / 10)
    }

    return sum
  }

  while (n >= 10) {
    n = getSumSquare(n)
    if (n === 1) {
      return true
    }
  }

  if (n === 1) {
    return true
  }

  return false
};
// @lc code=end

