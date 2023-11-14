const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api1',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000', // 请求转发到后端
      changeOrigin: true, // 控制服务器接收到的请求头中的Host值
      pathRewrite: { '^/api1': '' }, // 重写路径，将 /api1 去掉
    })
  );
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5001', // 请求转发到后端
      changeOrigin: true, // 控制服务器接收到的请求头中的Host值
      pathRewrite: { '^/api2': '' }, // 重写路径，将 /api1 去掉
    })
  );
};
