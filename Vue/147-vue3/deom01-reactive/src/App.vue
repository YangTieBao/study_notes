<template>
  <div>
    hello-{{ obj.mytext }} <button @click="handleClick">change</button><br/>
    <input type="text" v-model="obj2.mydata" />
    <button @click="pushClick">add</button> <br/>
    {{ itemlist }}
    <ul>
      <li v-for="item in obj2.datalist" :key="item">
        {{ item }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  mounted() {
    console.log(this.$store.state.hello);
  },
  setup() {
    //定义状态
    const obj = reactive({
      mytext: "web",
    });
    const obj2 = reactive({
      mydata: "",
      datalist: [],
    });
    
    //可以直接定义数组，但不能定义字符串
    const itemlist = reactive([])

    const handleClick = () => {
      obj.mytext = "java";
    };
    const pushClick = () => {
      itemlist.push(obj2.mydata)
      console.log(itemlist)
      obj2.datalist.push(obj2.mydata);
    };
    return {
      obj,
      obj2,
      itemlist,
      handleClick,
      pushClick,
    };
  },
};
</script>