const map = new Map()
// string作为key值
map.set('userName', 'zhb')
const userName = map.get('userName')
// function可以作为key值
const functionKey = () => {}
map.set(functionKey, 'functionValue')
const functionValue = map.get(functionKey)
// Object可以作为key值
const objectKey = { name: 1 }
map.set(objectKey, 'ObjectValue')
// 判断map大小
console.log(map.size)
// 删除key值
map.delete('user_name')
// 判断key值是否存在
console.log(map.has('user_name'))
// for 循环
for (const item of map) {
  console.log(item[0], ' : ', item[1])
}
// forEach
map.forEach((value, key) => {
  console.log(value, key)
})
