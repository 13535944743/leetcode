/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.lru = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  for (let i = 0; i < this.lru.length; i++) {
    const result = this.lru[i]

    if (result[key] !== undefined) {
      this.lru.splice(i, 1)
      this.lru.push(result)
      return result[key]
    }
  }

  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

  let flag = false
  for (let i = 0; i < this.lru.length; i++) {
    const result = this.lru[i]
    if (result[key] !== undefined) {
      flag = true
      result[key] = value
      this.lru.splice(i, 1)
      this.lru.push(result)
    }
  }

  if (!flag) {
    let newItem = {}
    newItem[key] = value
    this.lru.push(newItem)

    if (this.lru.length > this.capacity) {
      this.lru.shift()
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

