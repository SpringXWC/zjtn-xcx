const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @description obj排序的函数
 * @param obj
 * @return {string}
 */
function objKeySort(obj) {
  let newkey = Object.keys(obj).sort();
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  let newObj = {};
  for (let i = 0; i < newkey.length; i++) {//遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj;//返回排好序的新对象
}

/**
 * @description query参数key值排序 => 取所有key对应的 value (value之间用 ^ 分割)
 * @param obj {Object} 请求参数
 * @param str {string} 秘钥
 * @return {String} 返回需要加密的字符串
 */
const paramComputeMD5 = (obj, str) => {
  let data = {}
  for (let key in obj.Query) {
    data[key] = obj.Query[key]
  }
  data = objKeySort(data)
  let keys = Object.keys(data)
  let paramStr = ''
  for (let i = 0; i < keys.length; i++) {
    paramStr += data[keys[i]] + (i < keys.length - 1 ? '^' : '')
  }
  paramStr += str
  return paramStr
}

module.exports = {
  formatTime,
  paramComputeMD5
}