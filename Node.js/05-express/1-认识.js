/*
    1.express
        ->是专门用来创建 Web 服务器的
        ->本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法
        ->Express 的中文官网：http://www.expressjs.com.cn/
        ->常见的两种服务器：（快速创建这两种服务器）
            a.Web 网站服务器：专门对外提供 Web 网页资源的服务器
            b.API 接口服务器：专门对外提供 API 接口服务器
    2.安装
        npm i express@4.17.1
    3.创建基本的服务器
        a.const express = require('express')
        b.创建 web 服务器 --->const app = express()
        c.app.listen(80,()=>{
            console.log('express server running at http://127.0.0.1')
        })
*/
const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})
