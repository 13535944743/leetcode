/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0
  let minprofit = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprofit) {
      minprofit = prices[i]
    } else if (maxprofit < prices[i] - minprofit) {
      maxprofit = prices[i] - minprofit
    }
  }

  return maxprofit
};
// @lc code=end

