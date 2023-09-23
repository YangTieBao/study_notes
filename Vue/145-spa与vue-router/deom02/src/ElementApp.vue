<template>
  <el-calendar v-model="value">
  </el-calendar>
</template>

<script>
// 这个vue3用不了
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(ElementUI);
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>