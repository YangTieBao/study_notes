/*
    什么是Cookie
        ->是存储在用户浏览器中的一般不超过4kb的字符串。它由一个名称、一个值和其它几个用于控制
        Cookie有效期、安全性、使用范围的可选属性组成。
        ->不同域名下的Cookie各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的
         Cookie 一同发送到服务器。
        ->几大特性：
            1.自动发送
            2.域名独立
            3.过期时限
            4.4kb限制
    Cookie在身份认证中的作用
        客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的Cookie，
        客户端会自动将Cookie保存在浏览器中。
        随后，当客户端每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie，通过请求头的形式
        发送给服务器，服务器即可验明客户端的身份。
    
    1.安装
        npm i express-session
    2.向 session 中存数据
        当 express-session 中间件配置成功后，既可以通过 req.session 来访问和使用 session 对象，
        从而储存用户的关键信息
    3.从 session 中取数据
        ->可以直接从 req.session 对象上获取之前存储的数据
    4.清空session
        ->调用 req.session.destory() 函数，既可以清空服务器保存的session信息

*/
const express = require('express')
const app = express()
const session = require('express-session')
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended:false}))
//配置session中间件
app.use(
    session({
        secret:'hello world', //该属性的值可以为任意字符串
        resave:false, //固定写法
        saveUninitialized:true //固定写法
    })
)

//登录的 API 接口
app.post('/user/login',(req,res)=>{
    //判断用户信息是否正确
    if(req.body.username !=='ytb' || req.body.password !=='2003530'){
        return res.send({statusbar:1,msg:'登录失败',data:req.body})
    }
    //将用户的信息储存在 session 中
    //注意：只有成功配置了 express-session 这个中间件之后，才能通过 req 点出来 session 这个属性
    req.session.user = req.body //用户的信息
    req.session.islogin = true //用户的登录状态

    res.send(
        {
            statusbar:0,
            msg:'登录成功',
            data:req.body
        })
})

//获取用户姓名的接口
app.get('/user/username',(req,res)=>{
    if(!req.session.islogin){
        return res.send({statusbar:1,msg:'fail'})
    }
    res.send({
        statusbar:0,
        msg:'success',
        username:req.session.user.username
    })
})

//退出登录的接口
app.post('/user/logout',(req,res)=>{
    req.session.destroy()
    req.send({
        statusbar:0,
        msg:'退出登录成功'
    })
})

app.listen(80,()=>{
    console.log('Express running at 127.0.0.1')
})