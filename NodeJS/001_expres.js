// 1.导入express
const express = require('express')
// 2.创建应用对象
const app = express()

// 监听是否有人请求了服务器
app.use((req, res, next) => {
  console.log('有人请求了服务器');
  next()
})

// 3.创建路由
app.get('/student', (req, res) => {
  res.send([
    {id: 1, name: "zhangsan", age: 12},
    {id: 2, name: "lisi", age: 12},
    {id: 3, name: "wangwu", age: 12}
  ])
})

portID = 9007

// 4.监听端口，启动服务
app.listen(portID, (err) => {
  if (!err) console.log(`http://127.0.0.1:${portID}/student`)
  else console.log(err)
})