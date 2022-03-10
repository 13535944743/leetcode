/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let common = strs[0]

  for (let i = 1; i < strs.length; i++) {
    common = common.slice(0, strs[i].length)    // 用于排除第一个字符串较长，后面的字符串较短的情况
    for (let j = 0; j < strs[i].length; j++) {
      if (common[j] !== strs[i][j]) {
        common = common.slice(0, j)
      }
    }
  }
  return common
};
// @lc code=end

