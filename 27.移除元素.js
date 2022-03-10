/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0, right = nums.length

  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]    // 把后面的元素放到前面，避免重复赋值。如1,2,3,4,5要去掉1
      right--
    } else {
      left++
    }

  }

  return left
};
// @lc code=end

