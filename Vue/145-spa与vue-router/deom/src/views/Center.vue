<template>
  <div>
    <Swiper></Swiper>
    <div>嵌套路由</div>
    <ul>
      <!-- 编程式导航 -->
      <li v-for="item in datalist" :key="item" @click="handleClick(item)">
        {{ item }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      datalist: ["111", "222", "333"],
    };
  },
  components: {
    Swiper,
  },
  mounted() {
    console.log(this.$router.options.routes);
  },
  methods: {
    // 编程式导航
    handleClick(id) {
      // location.href = '#/detail',this.$router === router
      //this.$router.push(`/detail/${id}`)
      // 通过命名路由进行跳转
      this.$router.push({
        name: "myDetail",
        params: {
          myId: id,
        },
      });
    },
  },
};
</script>
