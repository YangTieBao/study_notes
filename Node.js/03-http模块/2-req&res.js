/*
    req 请求对象
        req.url 是客户端请求的 URL 地址
        req.methid 是客户端请求的 method 类型
    res 响应对象
        res.end()方法，向客户端响应一些内容
*/
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    var url = req.url
    var method = req.method
    console.log(`Your request url is ${url},your request method is ${method}`)
    const str = `Your request url is ${url},your request method is ${method}`
    res.end(str)
})
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
})