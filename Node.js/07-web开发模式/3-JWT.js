/*
    什么是JWT
        ->是目前最流行的跨域认证解决方案
    JWT的组成部分
        通常由三部分组成：Header(头部)、Payload(有效荷载)、Signature(签名)
        三者之间用英文"."分隔
            Header.Payload.Signature
        ->Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串
        ->Header 和 Signature 是安全性相关的部分，只是为了保证Token的安全性
    JWT的使用方式
        ->客户端收到服务器返回的 JWT 之后，通常会将它储存在localStorage 或 sessionStorage 中。
        ->把 JWT 放在 HTTP 请求头的 Authorization 字段中
            Authorization:Bearer <token>
    安装 JWT 相关的包
        npm install jsonwebroken express-jwt
            ->jsonwebtoken 用于生成 JWT 字符串
            ->express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
    定义 secret 密钥
        为了保证 JWT 字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的secret：
            1.当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得高加密好的JWT字符串
            2.当把 JWT 字符串解析还原成 JSON 对象的时候，需要使用 secret 密钥进行解密
                const secretKey = '-----'
    在登陆成功后生成 JWT 字符串
        调用jsonwebtoken 包提供的 sign()方法，将用户的信息加密成JWT 字符串
            ->用户信息对象
            ->加密密钥
            ->配置对象
            ->jwt.sign({username:},secretKey,{expiresIn:'30s'})
    将JWT字符串还原为JSON对象
        客户端每次在访问那些有权限接口的时候，都需要主动请求头中的 Authorization 字段，将 Token 字符串发送到服务器进行身份验证。
            ->expressJWT({secret:secretKey}) 就是用来解析 Token 的中间件
            ->.unless({path:[/^\api\//]})用来指定哪些接口不需要访问权限
            -> app.use(expressJWT({ secret:secretKey}).unless({path:[/^\api\//]}))
            ->注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
    使用req.user 获取用户信息
    捕获解析JWT失败后产生的错误
        err.name === 'UnauthorizedError' --->token 解析失败的错误
*/
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
const secretKey = 'user ^^ @@ ^^'
app.use(expressJwt({ secret: secretKey, algorithms: ['HS256']}).unless({ path: [/^\/user\//]}))
app.post('/user/login',(req,res)=>{
    //判断用户信息是否正确
    if(req.body.username !=='ytb' || req.body.password !=='2003530'){
        return res.send({statusbar:1,msg:'登录失败',data:req.body})
    }
    const jwtStr = jwt.sign({username:req.body.username},secretKey,{expiresIn:'30s'})
    res.send(
        {
            statusbar:0,
            msg:'登录成功',
            data:req.body,
            token:jwtStr
        })
})

app.get('/admin/xinxi',(req,res)=>{
    res.send({
        statusbar:0,
        msg:'获取信息成功',
        data:req.user,
    })
})

app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        return res.send('token解析失败')
    }else{
        return res.send('其它原因')
    }
})

app.listen(80,()=>{
    console.log('Express running at http://127.0.0.1')
})