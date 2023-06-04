/*
    1.express.static()
        ->使用它，可以非常方便的创建一个静态资源服务器
        ->app.use(express.static('public')) ---可以将public里面的所有文件可以对外进行访问
        ->注意：Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在 URL 中。
    2.挂载路径前缀
        如果你希望在托管的静态资源之前，挂载路径前缀，则可以使用如下的方式：
            app.use('/public',express.static('public'))
*/
const express = require('express')
const app = express()

// app.use('/example',express.static('./案例1'))
app.use(express.static('./案例2'))

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})