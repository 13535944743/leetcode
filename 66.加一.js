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
  let n = digits.length - 1
  while (true) {
    let result = digits[n] + 1
    digits[n--] = result >= 10 ? result - 10 : result   // 如果+1后，结果大于10，则需要-10

    if (result >= 10 && n < 0) {   // 有进位，且已经遍历结束，需要在数组首部添加进位1
      digits.unshift(1)
      break
    }

    if (result < 10) {    // 无进位，直接退出遍历
      break
    }
  }

  return digits
};
// @lc code=end

