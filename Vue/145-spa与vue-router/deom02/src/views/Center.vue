<template>
    <div>
      <Swiper></Swiper>
      <Tabtop></Tabtop>
      <router-view></router-view>
    </div>
</template>
<script>
import Swiper from '@/components/Swiper'
import Tabtop from '@/components/Tabtop'
export default {
components: {
    Swiper,
    Tabtop
  }
}
</script>

  