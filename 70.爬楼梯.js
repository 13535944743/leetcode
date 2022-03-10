/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 动态规划。因为每次你可以爬 `1` 或 `2` 个台阶，所以最后一步可能跨了一级台阶，也可能跨了两级台阶。
// 即` f(x)=f(x-1)+f(x-2)`，这意味着爬到第x阶的方法是到x - 1阶和x - 2阶的方法和。
// 既然如何，那么只需要从0阶慢慢加到目标阶即可知道方法数。
var climbStairs = function (n) {
  let dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]

};
// @lc code=end

