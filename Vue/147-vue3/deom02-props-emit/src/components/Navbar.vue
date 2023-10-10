<template>
  <div>
    navbar--{{ name }}
    <button @click="handleDel">del</button>
  </div>
</template>
<script>
export default {
  props:["name"],
  setup(props,{emit}){
    console.log(props.name)
    const handleDel = ()=>{
      emit('event',1000)
    }
    return {
      handleDel
    }
  }
}
</script>