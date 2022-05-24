/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

  if (nums.length <= 1) {
    return nums
  }

  // 随机取标杆，避免最坏情况
  const pivotIndex = Math.floor(Math.random() * (nums.length - 1))
  const pivot = nums.splice(pivotIndex, 1)[0]

  const left = []
  const right = []

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return sortArray(left).concat(pivot, sortArray(right))
};
// @lc code=end

