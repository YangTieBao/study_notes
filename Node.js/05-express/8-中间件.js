/*
    中间件的格式：
        本质上是一个 function() 函数
        格式：app.get('/',(req,res,next)=>{

        })
        注意：中间件函数的形参列表，必须包含 next 参数。而路由处理函数中只包含 req 和 res
    next 函数的作用
        ->next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由
    
    定义中间件函数
        const mv = function(req,res,next){
            console.log('这是一个中间件函数')
            next()
        }
    全局生效的中间件
        客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
        通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件
        const mv = function(req,res,next){
            console.log('这是一个中间件函数')
            next()
        }
        app.use(mv)
    中间件的作用;
        多个中间件之间，共享同一份 req 和 res ，基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性或方法
    
*/
const time = require('../04-模块化/07-传统的时间格式化')
const express = require('express')
const app = express()
// const mv = function(req,res,next){
//     console.log('这是一个中间件函数')
//     next()
// }
// app.use(mv)
//简化形式
app.use(function(req,res,next){
    console.log('这是第一个中间件函数')
    req.startTime = Date.now()
    res.day = time.dateFormat(new Date())
    next()
})
app.use(function(req,res,next){
    console.log('这是第二个中间件函数')
    next()
})
app.get('/',(req,res)=>{
    console.log('进入get路由！')
    res.send('hello world!'+req.startTime)
})
app.post('/',(req,res)=>{
    console.log('进入post路由！')
    res.send('Post Request!'+res.day)
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})