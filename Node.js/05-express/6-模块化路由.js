/*
    模块化路由：
        为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。
        步骤：
            1.创建路由模块对应的.js文件
            2.调用 express.Router()函数创建路由对象
            3，向路由对象上挂载具体的路由
            4.使用 module.exports 向外共享路由对象
            5.使用 app.use() 函数注册路由模块
        
    为路由模块添加访问前缀
        与托管静态资源文件是一样的
*/
//创建路由模块
 var express = require('express')
 var router = express.Router()
 router.get('/user/list',(req,res)=>{
    res.send('Get user list!')
 })
 router.post('/user/add',(req,res)=>{
    res.send('Post uesr add')
 })
 module.exports = router