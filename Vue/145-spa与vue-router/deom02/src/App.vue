<template>
  <div>
    <Tabbar v-show="this.$store.state.isshowTabbar"></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// # Vue 3 项目，安装最新版 Vant
// npm i vant

// # Vue 2 项目，安装 Vant 2
// npm i vant@latest-v2
// vant适合移动端布局
import Vant from 'vant'
import Vue from 'vue'
import 'vant/lib/index.css'
Vue.use(Vant)

import Tabbar from '@/components/Tabbar'
// document.documentElement.style.fontSize = document.documentElement.clientWidth/430 * 100 + 'px'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
