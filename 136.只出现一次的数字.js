/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或版本: 因为只有一个只出现一次的数字，其他数字都两两配对
  // 自身和自身异或，结果是0；0与任何数异或，结果为原来的书； 异或运算满足交换律和结合律
  // 全部元素的异或运算最后为只出现一次的数字
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]
  }

  return ans
};

// @lc code=end

