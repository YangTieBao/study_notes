/*
    监听get请求
        通过app.get()方法，可以监听客户端的 GET 请求
        ->语法：
            参数一：客户端请求的 URL 地址
            参数二：请求对应的处理函数
            app.get('URL',(req,res)=>{})
    
    监听post请求
        通过app.post()方法，可以监听客户端的 POST 请求
        ->语法：
            参数一：客户端请求的 URL 地址
            参数二：请求对应的处理函数
            app.post('URL',(req,res)=>{})
    
    把内容响应给客户端
        通过res.send()方法，可以把处理好的内容，发送给客户端
            向客户端发送 json 对象 --->res.send({name:'zs',age:20})
            向客户端发送文本内容 --->res.send('请求成功')
    
    获取 URL 中携带的查询参数
        通过 req.query(默认是空对象) 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
            ->req.query.name  req.query.age
            ->console.log(req.query)
    获取 URL 中的动态参数
        通过 req.params(默认是空对象) 对象，可以访问到 URL 中，通过:匹配到的动态参数：
            app.get('/user/:id/:name',(req,res)=>{
                //里面存放着通过 : 动态匹配到的参数值
                console.log(req.params)
            })
            注意：id名可以自己取，且可以有多个动态参数
*/      
const express = require('express')
const app = express()
app.get('/user',(req,res)=>{
    res.send({name:'zs',age:20})
})
app.post('/user',(req,res)=>{
    res.send('请求成功')
})
app.get('/',(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})
app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})