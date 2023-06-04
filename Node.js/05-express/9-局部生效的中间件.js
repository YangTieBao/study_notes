/*
    局部生效的中间件
        不使用 app.use() 定义的中间件，叫做局部生效的中间件
    定义多个局部中间件（两种方式是等价的）
        1.app.get('/',mv1,mv2,(req,res,next)=>{})
        2.app.get('/',[mv1,mv2],(req,res,next)=>{})
    了解中间件的5个使用注意事项
        1.一定要在路由之前注册中间件
        2.客户端发送过来的请求，可以连续调用多个中间件进行处理
        3.执行完中间件的业务代码之后，不要忘记调用 next() 函数
        4.为了防止代码逻辑混乱，调用 next() 函数之后不要再写额外的代码
        5.连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象
*/
const express = require('express')
const app = express()
const mv1 = (req,res,next)=>{
    console.log('这是第一个局部生效的中间件')
    next()
}
const mv2 = (req,res,next)=>{
    console.log('这是第二个局部生效的中间件')
    next()
}
const mv3 = (req,res,next)=>{
    console.log('这是第三个局部生效的中间件')
    next()
}
app.get('/',mv1,mv2,(req,res)=>{
    res.send('这是调用两个中间件的路由！')
})
app.get('/user',[mv1,mv2,mv3],(req,res)=>{
    res.send('这是调用三个中间件的路由！')
})
app.listen(80,()=>{
    console.log('127.0.0.1')
})