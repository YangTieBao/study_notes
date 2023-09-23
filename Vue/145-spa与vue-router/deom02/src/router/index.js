import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/center',
    component: () => import('@/views/Center'),
    children: [
      {
        path: '/center/enter',
        component: () => import('@/views/Enter')
      },
      {
        path: '/center/exit',
        component: () => import('@/views/Exit')
      },
      {
        path: '/center',
        redirect: '/center/enter'
      }
    ]
  },
  {
    path: '/right',
    component: () => import('@/views/Right')
  },
  {
    path: '/left',
    component: () => import('@/views/Left')
  },
  {
    name: 'myDetail',
    path: '/detail/:myId',
    component: () => import('@/views/Detail')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '*',
    redirect: '/center'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
