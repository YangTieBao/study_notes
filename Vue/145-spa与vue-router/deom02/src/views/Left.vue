<template>
  <div>
    <van-nav-bar title="影院" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-cell-group inset>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const tel = ref("");
    const text = ref("");
    const digit = ref("");
    const number = ref("");
    const password = ref("");

    return { tel, text, digit, number, password };
  },
  mounted() {
    axios
      .get(
        "ytb/api/mmdb/movie/v3/list/hot.json?ct=%E6%B9%98%E6%BD%AD&ci=264&channelId=4"
      )
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>