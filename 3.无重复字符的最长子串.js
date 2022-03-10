/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxlen = 0
  let arr = []    // 用来存不重复的字符串

  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {     // 即存好的字符串中已经有对应的字符了
      arr.splice(0, index + 1)    // 直接把存好的字符串到再次出现的字符串部分删掉(包括再次出现的字符)
    }

    arr.push(s[i])    // 把字符push进数组，无需考虑是否已经有重复的，因为有重复的话，上面的操作会删掉

    maxlen = Math.max(maxlen, arr.length)   // 比较存的字符个数和当前最大长度
  }

  return maxlen
};
// @lc code=end

