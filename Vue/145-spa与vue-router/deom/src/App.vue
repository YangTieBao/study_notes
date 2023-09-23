<template>
  <div>
    <ul>
      <!-- <li>
        <a href="/#/center">center</a>
      </li>
      <li>
        <a href="/#/right">right</a>
      </li>
      <li>
        <a href="/#/left">left</a>
      </li> -->
      
      <!-- 声明式导航 （老的写法）-->
      <!-- <li>
        <router-link to="/center" active-class="hello">center</router-link>
      </li>
      <li>
        <router-link to="/right" active-class="hello">right</router-link>
      </li>
      <li>
        <router-link to="/left" active-class="hello">left</router-link>
      </li> -->
      <!-- tag="li" 将其改为了li标签 -->
      <!-- <router-link to="/center" active-class="hello" tag="li">center</router-link>
      <router-link to="/right" active-class="hello" tag="li">right</router-link>
      <router-link to="/left" active-class="hello" tag="li">left</router-link> -->

      <!-- vue4写法，新的写法 -->
      <router-link to="/center" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'hello':''">center</li>
      </router-link>
      <router-link to="/right" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'hello':''">right</li>
      </router-link>
      <router-link to="/left" custom v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'hello':''">left</li>
      </router-link>
    </ul>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// 这是 link-router 自定义的，并且可以改
// .router-link-active{
//   color:red;
// }
.hello{
  color:green;
}
</style>
