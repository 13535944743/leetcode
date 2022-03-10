/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {			// 小于0直接返回
    return false
  }

  let div = 1
  while (x / div >= 10) {
    div *= 10         // 用于x / div来获取第一位
  }

  while (x !== 0) {
    let left = Number.parseInt(x / div)	 // 获取第一位
    let right = x % 10				// 获取最后一位
    if (left !== right) {
      return false
    }

    x = Number.parseInt((x % div) / 10)    // 新的x去掉已经符合条件的首尾
    div = Number.parseInt(div / 100)	  // 新的x变化了，对应的div也要变化，除以100是因为x去掉了首尾
  }

  return true
};


// @lc code=end

