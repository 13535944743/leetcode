/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 1
  let r = x

  let mid
  while (l <= r) {
    mid = Math.floor((l + r) / 2)

    if (mid * mid <= x) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return r
};
// @lc code=end

