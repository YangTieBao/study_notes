<template>
  <div id="app">
    hello App-{{myname}}
    <input type="text" v-model="mytext">
    <button @click="handleClick">push</button>
    <ul>
      <li v-for="item in datalist" :key="item">
        {{ item }}
      </li>
    </ul>
    <navbar myname="hello" :myleft="false" @event="handle2">
      <div>hello world</div>
    </navbar>
    <sidebar v-show="isshow"></sidebar>
    <div v-hello=" 'red' ">1111111111111</div>
    <div v-hello=" 'blue' ">2222222222222</div>
  </div>
</template>

<script>
import navbar from '@/components/NavBar'; // @ 别名 ===>src 的绝对路径
import sidebar from '@/components/SideBar';
import Vue from 'vue';
// 全局或者 局部注册
// Vue.component('navBar', navbar)
Vue.directive('hello', {
  inserted (el, binding) {
    console.log(binding)
    el.style.border = '1px solid black'
    // el.style.background = binding.value
  }
})
export default {
  data () {
    return {
      myname: '前端!',
      mytext: '',
      datalist: [],
      isshow: true
    }
  },
  // 局部注册
  components: {
    navbar,
    sidebar
  },
  methods: {
    handleClick () {
      this.datalist.push(this.mytext)
    },
    handle2 () {
      this.isshow = !this.isshow
    }
  }
}
</script>

<style lang="scss">
// 添加lang="scss" 可以更简单的写样式，有了逻辑运算
$width:500px;
#app{
  width:$width;
  background:yellow;
}
ul{
  li{
    background:pink;
  }
}
</style>
