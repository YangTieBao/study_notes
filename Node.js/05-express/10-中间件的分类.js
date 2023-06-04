/*
    中间件的分类
        1.应用级别的中间件
            通过 app.use() app.get() app.post()，绑定到app实例上的中间件
        2.路由级别的中间件
            绑定到 express.Router() 实例上的中间件
            router.use((req,res,next)=>{})
        3.错误级别的中间件
            ->作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
            ->格式：(err,req,res,next)=>{}
            ->注意：错误级别的中间件，必须注册在所有路由之后
        4.Express 内置的中间件
            三个常用的中间件：
                express.static 快速托管静态资源的内置中间件
                express.json 解析 JSON 格式的请求体数据 --->app.use(express.json())
                express.urlencoded 解析 URL-encoded 格式的请求体数据 --->app.use(express.urlencoded({extended:false}))
        5.第三方的中间件
            非官方的，而是由第三方开发出来的中间件，叫做第三方中间件
                a.运行 npm install body-parser 安装中间件
                b.使用 require 导入
                c.调用 app.use() 注册并使用中间件
        注意：没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
*/