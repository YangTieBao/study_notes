/*
    核心实现步骤
        1.获取请求的url地址
        2.设置默认的响应内容为 404 Not found
        3.判断用户请求的是否为 / 或 /index.html 首页
        4.判断用户请求的是否为 /about.html 关于首页
        5.设置Content—Type响应头，防止中文乱码
        6.使用res.end()把内容响应给客户端
*/
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    var url = req.url
    var method = req.method
    let content = '<h1>404 Not found</h1>'
    if(url==='/'||url==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url==='/about.html'){
        content = '<h1>关于首页</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
})
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
})