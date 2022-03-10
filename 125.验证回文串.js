/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')

  // return s.split('').reverse().join('') === s

  let left = 0, right = s.length - 1
  while (left < right) {
    while (left < right && /[^a-zA-Z0-9]/g.test(s[left])) {
      left++
    }
    while (left < right && /[^a-zA-Z0-9]/g.test(s[right])) {
      right--
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    } else {
      left++
      right--
    }
  }

  return true
};


// @lc code=end

