/*
    express 中的路由
        ->指的是客户端请求与服务器处理函数之间的映射关系
        ->由三部分组成，分别是请求的类型、请求的 URL 地址、处理函数
        ->格式： app.METHOD(PATH,HANDLER)
    
*/
const express = require('express')
const app = express()
//挂载路由
app.get('/',(req,res)=>{
    res.send('hello world!')
})
app.post('/',(req,res)=>{
    res.send('Post Request!')
})
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})