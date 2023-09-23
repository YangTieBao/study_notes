# spa
--- 
单页面应用：
    组成：一个外壳和多个页面片段组成
    url模式： a.com/#/pageone    a.com/#/pagetwo
多页面应用：
    组成：多个完整页面构成
    url模式： a.com/pageone.html    a.com/pagetwo.html

---

# 路由
---
1.hash路由 ==> location.hash 切换
               window.onhashchange 监听路径的切换
2.history路由 ==> history.pushState 切换
                  window.onpopstate 监听路径的切换

---
# 路由懒加载
---
当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。结合Vue的异步组件和Webpack 的代码分割功能，轻松实现路由组件的懒加载。

this.$router.push()方法不管是带#，还是hash、history，都可以进行跳转，非常方便。

---

# 导入 iconfont 文件
---
方法一：在 index.html 中用 <link rel="stylesheet" href=""> 导入 （iconfont 放在 public 中）
方法二：在js中 直接用 import 导入就行（且iconfont 放在 assets 中）

---
