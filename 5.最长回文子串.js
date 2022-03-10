/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxlen = 1
  let maxstr = s[0]

  if (s === s.split('').reverse().join('')) {   // 一开始就符合条件，直接返回自身
    return s
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.lastIndexOf(s[i])   // 从后往前找此字符有无另外出现的位置，最长回文子串首尾一定相同
    while (index !== i && index !== -1) {   // 此字符有另外出现的位置，循环找出全部位置，除自身位置外
      let str = s.slice(i, index + 1)
      if (str === str.split('').reverse().join('')) {   // 判断是否符合回文串
        if (str.length > maxlen) {
          maxlen = str.length
          maxstr = str
        }
      }
      index = s.lastIndexOf(s[i], index - 1)    // 继续往前找
    }
  }

  return maxstr
};

// @lc code=end

