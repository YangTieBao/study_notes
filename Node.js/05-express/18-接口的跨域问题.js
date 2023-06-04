/*
    解决跨域问题：
        1.CORS （主流解决方案，推荐使用）
            ->运行 npm install cors 安装中间件
            ->使用 const cors = require("cors")
            ->调用 app.use(cors()) 配置中间件
        2.JSONP （有缺陷的解决方案，只支持 GET 请求）
            ->如果项目已经有了 CORS 跨域资源共享，为了防止冲突，必须再配置CORS中间件之前声明 JSONP 的接口
    什么是 CORS
        ->是由一系列 HTTP 响应头组成，这些是 HTTP 响应头决定浏览器是否阻止前端JS代码跨域获取资源
        ->浏览器的同源安全策略默认会阻止网页‘跨域’获取资源，但如果接口服务器配置了 CORS 相关的HTTP响应头，就可以解除浏览器端的跨域访问限制
    CORS 的注意事项
        1.CORS主要在服务器端进行配置，不需要再客户端进行配置
        2.CORS有兼容性问题
    CORS 响应头部 - Access-Control-Allow-Origin
        ->语法：Access-Control-Allow-Origin:<origin> | *
        ->其中，origin 参数的值指定了允许访问该资源的外域 URL。
        ->列如，只允许来自 http://itcast.cn 的请求
            res.setHeader('Access-Control-Allow-Origin','http://itcast.cn')
        ->通配符*表示允许来自任何域的请求
             res.setHeader('Access-Control-Allow-Origin','*')
    CORS 响应头部 - Access-Control-Allow-Methods
        ->默认情况下，CORS仅支持客户端发起 GET、POST、HEAD 请求
            如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源
        ->res.setHeader('Access-Control-Allow-Origin','POST,GET,DELETE,HEAD')
            res.setHeader('Access-Control-Allow-Origin','*')
    CORS 的请求的分类
        1.简单请求
        2.预捡请求
*/  