<template>
    <div class="swiper-container" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 注意：后加bundle功能才能实现
import 'swiper/swiper-bundle.css'
export default {
  props:{
    space:{
      type:Number,
      default:1
    },
    name:{
      type:String,
      default:""
    }
  },
  mounted () {
    new Swiper('.'+this.name, {
      slidesPerView:this.space, // 一个页面有几个
      spaceBetween:30, // 每个隔多宽
      freeMode:true
    })
  }
}
</script>
