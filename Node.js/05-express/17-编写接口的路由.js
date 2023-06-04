const express = require('express')
const router = express.Router()
router.get('/get',(req,res)=>{
    const query = req.query
    res.send({
        statusbar:0,//0表示处理成功，1表示处理失败
        msg:'get请求成功！',//状态的描述
        data:query
    })
})

router.post('/post',(req,res)=>{
    const body = req.body
    res.send({
        statusbar:0,
        msg:'post请求成功！',
        data:body
    })
})

module.exports = router