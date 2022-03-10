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

  let slow = n
  let fast = getSumSquare(n)
  while (fast !== 1 && fast !== slow) {
    slow = getSumSquare(slow)
    fast = getSumSquare(getSumSquare(fast))
  }

  return fast === 1
};


// @lc code=end

