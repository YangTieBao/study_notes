<template>
  <div>
    hello
    {{ computedList }}
    <input type="text" v-model="obj.mytext" />
  </div>
</template>
<script>
import {
  computed,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  watch,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const obj = reactive({
      mytext: "",
      name: "web",
    });
    const datalist = reactive(["111", "222", "333"]);
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    onMounted(() => {
      console.log(obj.name);
      console.log(router);
      console.log(route);
      console.log(store);
    });
    const computedList = computed(() => {
      return datalist.join(" ");
    });

    // obj.mytext 值一改变，就监听且回调函数一次
    watch(
      () => obj.mytext,
      () => {
        console.log("watch");
      }
    );

    onUpdated(() => {});
    onUnmounted(() => {});
    return {
      obj,
      onMounted,
      onUpdated,
      onUnmounted,
      computedList,
    };
  },
};
</script>