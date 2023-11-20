const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use((req,res,next)=>{
    console.log(`有人访问服务器2`)
    next()
})

app.get('/car',(req,res)=>{
    const students = [
        {id:1,name:'奔驰',price:14500},
        {id:2,name:'奥迪',price:12300},
        {id:3,name:'兰博基尼',price:14000}
    ]
    res.send(students)
})

app.listen(5001,()=>{
    console.log(`服务器地址:http://localhost:5001`)
})