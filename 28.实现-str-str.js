/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let hLen = haystack.length
  let nLen = needle.length

  for (let i = 0; i + nLen <= hLen; i++) {
    let flag = true               // 每一次从新的地方开始匹配，都需要重置flag为true
    for (let j = 0; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) {    // 不匹配，直至跳出循环，并置flag为false
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }

  return -1;
};
// @lc code=end

