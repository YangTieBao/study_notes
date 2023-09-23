<template>
    <div>
        login
        <button @click="changeRoute">改变</button>
        <button @click="handleLogin">登录</button>
        <button @click="handleRight">LoginHandle</button>
        <button @click="handleLeft">LoginLeft</button>
        <button @click="handleSerch">LoginSerch</button>
    </div>
</template>
<script>
import Router from '@/router'
export default {
    methods: {
        changeRoute () {
            console.log(Router.options.routes[0].meta.isRequired)
            Router.options.routes[0].meta.isRequired=true
            // console.log(Router.options.routes[0].meta.isRequired)
        },
        handleLogin () {
            console.log(Router.options.routes[0].meta.isRequired)
            this.$router.push('/center')
        },
        handleRight () {
            console.log(this.$route.query.myright)
        },
        handleLeft () {
            // console.log(this.$route.query.myleft)
            this.$router.push(this.$route.query.myleft)
        },
        handleSerch () {
            console.log(this.$route.query.myserch)
        }
    }
}
</script>