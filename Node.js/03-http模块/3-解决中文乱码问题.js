/*
    为了防止中文乱码问题，需要设置响应头 Content-Type 的值为 text/html;charset=utf-8
    res.setHeader('Content_type','text/html;chatset=utf-8')
 */
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    var url = req.url
    var method = req.method
    console.log(`你的url地址请求是${url},你的请求方式是${method}`)
    const str = `你的url地址请求是${url},你的请求方式是${method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str)
})
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
})