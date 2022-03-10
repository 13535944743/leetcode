/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let flag = true
  let n = digits.length - 1
  while (flag) {
    let result = digits[n] + 1
    digits[n--] = result >= 10 ? result - 10 : result

    if (result >= 10 && n < 0) {
      digits.unshift(1)
      break
    }

    if (result < 10) {
      flag = false
    }
  }

  return digits
};
// @lc code=end

