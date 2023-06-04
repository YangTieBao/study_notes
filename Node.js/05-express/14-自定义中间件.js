/*
    ->自己动手模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据
    ->步骤：
        1.定义中间件
        2.监听 req 的 data 事件
        3.监听 req 的 end 事件
            ->当请求体数据接收完毕之后，会自动触发 req 的 end 事件
        4.使用 querystring 模块来解析请求体数据
            ->内置了一个 querystring 模块，专门用来处理查询字符串。通过这个模块提供的 parse() 函数，
              可以轻松查询字符串，解析成对象的格式。
        5.将解析出来的数据对象挂载为 req.body
        6.将自定义中间件封装为模块

*/
const express = require('express')
// const qs = require('querystring')
const app = express()
// app.use((req,res,next)=>{
//     //定义一个 str 字符串，专门用来储存客户端发送过来的请求体数据
//     let str = ''
//     //监听 req 的 data 事件
//     req.on('data',(chunk)=>{
//         str += chunk
//     })
//     req.on('end',()=>{
//         //在 str 中存放的是完整的请求体数据
//         console.log(str)
//         //把字符串格式的请求体数据，解析成对象格式
//         const body = qs.parse(str)
//         req.body = body
//         console.log(body)
//         next()
//     })
// })
const my = require('./15-自定义中间件模块')
app.use(my)
app.post('/book',(req,res)=>{
    res.send(req.body)
})
app.listen(80)