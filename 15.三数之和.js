/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = len - 1;

    while (L < R) {

      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        arr.push([nums[i], nums[L], nums[R]]);
        L++;
        R--;

        while (L < R && nums[L] === nums[L - 1]) {
          L++;
        }

        while (L < R && nums[R + 1] && nums[R] === nums[R + 1]) {
          R--;
        }

      } else if (sum < 0) {
        L++;
      } else {
        R--;
      }
    }
  }

  return arr
};
// @lc code=end

