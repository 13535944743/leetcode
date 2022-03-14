/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = new Array(rowIndex + 1).fill(0)   // 索引为rowIndex的那一行有rowIndex+1个元素

  row[0] = 1

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {// 从右边往前算，因为一开始就给够了数组长度，没有值的部分都设为0了
      row[j] += row[j - 1]
    }
  }

  return row
};
// @lc code=end

