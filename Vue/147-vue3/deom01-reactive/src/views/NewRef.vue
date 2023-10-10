<template>
  <div>
    {{ mydata }}--{{ name }}--{{ age }}
    <br />
    <input type="text" v-model="mytext" ref="inputref" />
    <input type="text" ref="inputrefTwo" />
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="item in datalist" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const hellodata = reactive({
      age: 10,
      name: "hello",
    });
    const mydata = ref("web");
    const inputref = ref();
    const inputrefTwo = ref();
    const mytext = ref();
    onMounted(() => {
      console.log("1111111", inputref.value);
      console.log('22222222',inputrefTwo.value);
    });
    const datalist = ref([]);
    const handleAdd = () => {
      console.log(inputref.value.value);
      datalist.value.push(mytext.value);
    };
    return {
      mydata,
      mytext,
      datalist,
      inputref,
      inputrefTwo,
      ...toRefs(hellodata),
      handleAdd,
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 100px;
  background: yellow;
  width: 100%;
  height: 400px;
}
</style>