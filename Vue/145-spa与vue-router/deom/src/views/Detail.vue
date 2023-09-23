<template>
    <div>detail</div>
</template>
<script>
export default {
  created () {
    // 拿到当前匹配的路由
    // console.log(this.$route)
    // 拿到id
    console.log(this.$route.params.myId)
  }
}
</script>
