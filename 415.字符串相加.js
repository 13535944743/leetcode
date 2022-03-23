/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let ret = ''
  let len1 = num1.length - 1
  let len2 = num2.length - 1
  let flag = 0    // 进位标志。0代表没有进位，1代表有进位

  while (len1 >= 0 || len2 >= 0) {
    let sum = flag
    if (len1 >= 0) {
      sum += (num1[len1--] - 0)
    }
    if (len2 >= 0) {
      sum += (num2[len2--] - 0)
    }

    if (sum >= 10) {
      sum -= 10
      flag = 1
    } else {
      flag = 0
    }

    ret += sum
  }

  ret = flag === 1 ? ret + '1' : ret

  return ret.split('').reverse().join('')  // 转换成数组后，反转再转换成字符串
};
// @lc code=end

