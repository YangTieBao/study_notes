import Center from '@/views/Center'
import Deom1 from '@/views/Deom1'
import Detail from '@/views/Detail'
import Left from '@/views/Left'
// import Login from '@/views/Login'
import Right from '@/views/Right'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter) // 注册路由插件，两个全局 router-view router-link
// 配置表
const routes = [
  {
    name: 'myCenter',
    path: '/center',
    component: Center,
    // 嵌套路由
    children: [
      {
        path: '/center/deom1',
        component: Deom1,
        meta: {
          isRequired: true
        }
      },
      {
        path: '/center',
        redirect: '/center/deom1'
      }
    ],
    meta: {
      isRequired: false
    }
  },
  {
    name: 'myDetail', //命名路由
    path: '/detail/:myId', // 动态路由
    component: Detail
  },
  {
    path: '/login',
    component: () => import('@/views/Login'), // 懒加载，用到的时候才会下载其js
    meta: {
      isRequired: true
    }
  },
  {
    path: '/right',
    component: Right,
    meta: {
      isRequired: false
    }
  },
  {
    path: '/right/search',
    component: Search
  },
  {
    path: '/left',
    component: Left,
    meta: {
      isRequired: true
    },
    // 局部拦截
    // beforeEnter(to, from, next) {
    //   next({
    //     path:'/login',
    //     query: {
    //       myleft: to.fullPath
    //     }
    //   })
    // }
  },
  // 重定向
  // {
  //   path: '/',
  //   component: Center
  // }
  {
    path: '*', // 通配符
    // redirect: '/center'
    // 利用命名路由进行重定向
    redirect: {
      name: 'myCenter'
    }
  }
]

const router = new VueRouter({
  mode: 'history', // 会将前端路由url的#省略，会分不清是前端路由，还是后端路由
  routes
})

// 全局拦截
// router.beforeEach((to,from,next)=>{
//   // to.fullPath 表示要到达的地址
//   // from 表示从哪里来， to 表示到哪里去
//   // console.log(from)
//   // console.log(to)
//   if(to.meta.isRequired === true){
//     next()
//   }else{
//     next({
//       path:'/login',
//       query: {
//         myright: to.fullPath
//       }
//     })
//   }
//   // 表示可以到达
//   // next() 
// })

export default router
