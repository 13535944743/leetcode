/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 实际类似10进制转26进制
  let arr = []
  let right = columnNumber % 26
  while (true) {

    if (right === 0) {   // 特殊情况,如26时,应是Z
      right += 26
    }

    let num = 'A'.charCodeAt() + right - 1

    arr.unshift(String.fromCharCode(num))

    columnNumber = Math.floor((columnNumber - right) / 26)    // 得到后面一位后,columnNumber值要更新
    right = columnNumber % 26

    if (columnNumber === 0) {
      break
    }
  }

  return arr.join('')
};

// @lc code=end

