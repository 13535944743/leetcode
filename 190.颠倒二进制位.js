/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    let before = res << 1
    let after = n & 1

    res = before | after    // 通过|运算符把之前的位数和当前位联系起来。res<<1就是之前的位，n&1就是当前需要加入的

    n >>= 1
  }

  return res
};
// @lc code=end
console.log(reverseBits(4294967293))