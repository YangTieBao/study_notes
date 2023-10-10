import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld')
  },
  {
    path:'/ref',
    component:()=>import('../views/NewRef.vue')
  },
  {
    path:'/',
    redirect:'/ref'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
