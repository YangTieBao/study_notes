<template>
    <div>research</div>
</template>
<script>
export default {
    // 路由生命周期,这也是一个局部拦截
    beforeRouteEnter(to,from,next) {
        // 在渲染该组件的对应路由应被 confirm 前调用
        // 不能获取组件实例 ‘this’
        // 因为当前守卫执行前，组件实例还没有被创建
        next({
            path:'/login',
            query: {
                myserch: to.fullPath
            }
        })
    }
}
</script>
