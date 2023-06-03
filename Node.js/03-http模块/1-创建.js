/*
    创建web服务器的基本步骤
        1.导入http模块
            const http = require('http')
        2.创建web服务器实例
            const server = http.createServer()
        3.为服务器绑定 request 事件，监听客户端的请求
            server.on('request',(req,res)=>{
                需要写的内容
            })
        4.启动服务器
            server.listen(端口号(80),()=>{
                console.log('http server running at http://127.0.0.1')
            })
*/

const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    console.log('Someone visit our web server!')
})
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
})