/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {

    const x = nums[i]

    sum = Math.max(sum + x, x)
    result = Math.max(result, sum)
  }

  return result
};
// @lc code=end

