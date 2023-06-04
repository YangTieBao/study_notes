const qs = require('querystring')

const myparse = (req,res,next)=>{
    //定义一个 str 字符串，专门用来储存客户端发送过来的请求体数据
    let str = ''
    //监听 req 的 data 事件
    req.on('data',(chunk)=>{
        str += chunk
    })
    req.on('end',()=>{
        //在 str 中存放的是完整的请求体数据
        console.log(str)
        //把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        req.body = body
        console.log(body)
        next()
    })
}

module.exports = myparse