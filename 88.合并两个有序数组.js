/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1

  m--  // 把元素数目变为索引
  n--

  while (len >= 0 && m >= 0 && n >= 0) {    // 如果已经得出最终答案或有一个数组已经遍历完，直接退出循环
    if (nums1[m] > nums2[n]) {  // 把大的元素放到后面
      nums1[len--] = nums1[m]
      m--
    } else {
      nums1[len--] = nums2[n]
      n--
    }
  }

  while (m >= 0) {    // 有一个数组已经遍历完的情况，需要把没遍历完的数组也放好
    nums1[len--] = nums1[m--]
  }

  while (n >= 0) {
    nums1[len--] = nums2[n--]
  }
};
// @lc code=end

