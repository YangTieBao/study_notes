/*

*/
const router = require('./17-编写接口的路由')
const express = require('express')
const app = express()
app.get('/user/jsonp',(req,res)=>{
    //得到函数的名称
    const funcName = req.query.callback
    //定义要发送到客户端的数据对象
    const data = {name:'zs',age:22}
    //拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    //把拼接的字符串，响应给客户端
    res.send(scriptStr)
})
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use('/user',router)
app.listen(80,()=>{
    console.log('Express running at http://127.0.0')
})