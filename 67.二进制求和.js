/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let str = []
  let flag = 0    // 1表示有进位，0代表没有进位
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {   // 只有两个字符串都遍历完，才退出循环
    let sum

    if (i < 0) {                // a串遍历完了，但b串没完
      sum = (b[j] - 0) + flag  // 一开始的-0是把字符转换成number
    } else if (j < 0) {       // b串遍历完，但a串没完
      sum = (a[i] - 0) + flag
    } else {                  // a、b串都没遍历完
      sum = (b[j] - 0) + (a[i] - 0) + flag
    }

    flag = sum >= 2 ? 1 : 0      // 记录有无进位，用于下一轮
    sum = sum >= 2 ? sum - 2 : sum
    str.unshift(sum.toString())     // 把这一轮的结果存好
  }

  if (flag) {
    str.unshift(1)      // 最后还有进位
  }

  return str.join('')
};
// @lc code=end

