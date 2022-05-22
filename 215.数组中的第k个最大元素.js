/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

  const sortedNums = quickSort(nums)
  return sortedNums[k - 1]

};

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums
  }

  const pivotIndex = Math.floor(nums.length / 2)

  const pivot = nums.splice(pivotIndex, 1)[0]

  const left = []
  const right = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}
// @lc code=end

