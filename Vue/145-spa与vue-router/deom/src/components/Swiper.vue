<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in datalist" :key="item">
                <img :src="item">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
// import {Swiper,Pagination,Navigation,Autoplay} from 'swiper/bundle'
import Swiper from 'swiper/bundle' // 注意：后加bundle功能才能实现
import 'swiper/swiper-bundle.css'
export default {
  data () {
    return {
      datalist: ['https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&amp;riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&amp;ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0',
        'https://ts1.cn.mm.bing.net/th/id/R-C.9e45a633e95179a37c907fa2797999ad?rik=aMuPS4TunAh5ZA&amp;riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214Q2.jpg&amp;ehk=P%2firfYpARc1fHht%2bWpapYR4W15p6SLABE8CBexoeon4%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0',
        'https://ts1.cn.mm.bing.net/th/id/R-C.3745122e5760fe2283195293d76bc1e0?rik=YBMOcCcn7CX6Ig&amp;riu=http%3a%2f%2fup.deskcity.org%2fpic%2f20%2fe4%2f4d%2f20e44dce0fe116832ba890edaf2ede32.jpg&amp;ehk=vldj1pqTKyKgirU8ck%2f%2bJWEhtPm22Owe5VEmGNMeLpA%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0']
    }
  },
  mounted () {
    // Swiper.use([Pagination,Navigation,Autoplay])
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>
<style lang='scss' scoped>
/* @import '@/assets/swiper-bundle.min.css'; */
// @import url("../../node_modules/swiper/swiper-bundle.css");
img{
    width:600px;
}
</style>
