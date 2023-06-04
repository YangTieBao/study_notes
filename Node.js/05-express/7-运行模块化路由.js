const express = require('express')
const app = express()
const router = require('./6-模块化路由')
app.use('/router',router)
//注意：app.use() 函数的作用：就是来注册全局中间件
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})