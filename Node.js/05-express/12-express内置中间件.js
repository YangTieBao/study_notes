const express = require('express')
const app = express()
app.use(express.json())
app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('hello')
})
app.use(express.urlencoded({extended:false}))
app.post('/book',(req,res)=>{
    console.log(req.body.gender)
    res.send('I like the book!')
})
app.listen(80)