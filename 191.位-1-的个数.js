/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  let res = 0

  for (let i = 0; i < 32; i++) {
    if (n & 1) {    // 拿到最后一位
      count++;
    }
    n >>= 1         // 去掉最后一位
  }
  return count
};
// @lc code=end

