/*
    1.为什么要使用 nodemon 
        ->可以使用这个工具，它能监听项目文件的变动，当代码被修改之后，nodemon 会自动帮我们重启项目
    2.安装 nodemon
        npm i nodemon -g
    3.使用 nodemon
        ->之前是使用 node app.js 命令来启动项目，确定是修改之后，需要手动重启项目
        ->使用 nodemon app.js 来启动项目，当项目修改之后，会自动重启
*/
const express = require('express')
const app = express()

app.use('/example',express.static('./案例1'))
app.use(express.static('./案例2'))

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})