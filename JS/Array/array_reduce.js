/**
 * reduce 方法使用场景
 */

/** 累加 */
const resultAdd = [1, 2, 3].reduce((pre, cur) => pre + cur, 0)
console.log(resultAdd)

/** 找最大值 */
const resultMax = [1, 3, 5, 7, 4, 2].reduce((pre, cur) => Math.max(pre, cur))
console.log(resultMax)

/** 数组去重 */
const resultList = [1, 2, 3, 4, 3, 2, 1].reduce((preList, cur) => {
  if (preList.indexOf(cur) === -1) preList.push(cur)
  return preList
}, [])
console.log(resultList)

/** 归类 */
const dataList = [
  { name: 'aa', country: 'China' },
  { name: 'bb', country: 'China' },
  { name: 'cc', country: 'USA' },
  { name: 'dd', country: 'EN' },
]
const resultObj = dataList.reduce((preObj, cur) => {
  const { country } = cur
  if (!preObj[country]) preObj[country] = []
  preObj[country].push(cur)
  return preObj
}, {})
console.log(resultObj)

/** 字符串反转 */
const resultStr = Array.from('hello world!').reduce((pre, cur) => `${cur}${pre}`, '')
console.log(resultStr)
