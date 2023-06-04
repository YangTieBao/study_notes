const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    throw new Error('服务器内部发生了错误！')
    res.send('hello!')
})
app.use((err,req,res,next)=>{
    console.log('Error:'+err.message)
    res.send('Error:'+err.message)
})
app.listen(80)