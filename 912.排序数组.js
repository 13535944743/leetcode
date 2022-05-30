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
  quicksort(nums, 0, nums.length - 1)

  return nums
};

function quicksort(nums, l, r) {
  if (l >= r) {
    return
  }
  const pos = randomIndex(nums, l, r)
  quicksort(nums, l, pos - 1)
  quicksort(nums, pos + 1, r)
}

function randomIndex(nums, l, r) {
  const i = Math.floor(Math.random() * (r - l) + l)

  const temp = nums[i]


  nums[i] = nums[r]
  nums[r] = temp
  // [nums[i], nums[r]] = [nums[r], nums[i]]

  return partition(nums, l, r)
}

function partition(nums, l, r) {
  const pivot = nums[r]

  let i = l

  for (let j = l; j < r; j++) {
    if (nums[j] <= pivot) {
      // 把小于标杆的移到左边
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
  }

  // 标杆归位
  [nums[i], nums[r]] = [nums[r], nums[i]]
  return i
}
// @lc code=end

