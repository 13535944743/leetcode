/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1
  let ans = nums.length

  while (left <= right) {
    let mid = Number.parseInt((left + right) / 2)

    if (target <= nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right + 1
};
// @lc code=end

