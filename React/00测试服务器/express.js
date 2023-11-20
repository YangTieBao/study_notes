const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log(`有人访问服务器1`)
    next()
})

app.get('/student',(req,res)=>{
    const students = [
        {id:1,name:'张三',age:14},
        {id:2,name:'李四',age:24},
        {id:3,name:'王五',age:18}
    ]
    res.send(students)
})

app.listen(5000,()=>{
    console.log(`服务器地址:http://localhost:5000`)
})