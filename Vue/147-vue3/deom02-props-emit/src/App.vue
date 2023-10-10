<template>
  <div>
    <navbar name="hello" @event="change"></navbar>
    <sidebar v-if="obj.isshow"></sidebar>
  </div>
</template>
<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
import {reactive} from 'vue'
export default {
  components:{
    navbar,
    sidebar
  },
  setup(){
    const obj = reactive({
      isshow:true
    })
    const change = (data)=>{
      console.log(data)
      obj.isshow = !obj.isshow

    }
    return {
      obj,
      change
    }
  }
}
</script>