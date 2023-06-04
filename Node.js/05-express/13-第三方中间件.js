const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({extended:false}))
app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('I like the book!')
})
app.listen(80)