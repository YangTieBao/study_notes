<template>
  <div>
    <detail-header v-scroll="100">
      {{ item.name }}
    </detail-header>
    <header>
      <detail-swiper-first :space="3.3" name="Hello">
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
        <div class="swiper-slide"><img :src="item.poster" /></div>
      </detail-swiper-first>
      <div>
        <div class="filmName">{{ item.name }} {{ item.item.name }}</div>
        <div>{{ item.category }}</div>
        <div>{{ item.nation }} | {{ item.runtime }} 分钟</div>
        <br />
        <div>{{ item.synopsis }}</div>
      </div>
    </header>
    <section>
      <div class="actor">演职人员</div>
      <detail-swiper :space="3.5" name="actors">
        <detail-swiper-item v-for="(data, index) in item.actors" :key="index">
          <img :src="data.avatarAddress" />
          <div class="dataName">{{ data.name }}</div>
          <div class="dataRole">{{ data.role }}</div>
        </detail-swiper-item>
      </detail-swiper>
    </section>
    <footer>
      <div class="photo">剧照</div>
      <detail-swiper :space="3" name="photos">
        <detail-swiper-item v-for="(data, index) in item.photos" :key="index">
            <!-- <div :style="{
                backgroundImage:'url('+data+')'
            }" class="image" @click="handleImage(index)"></div> -->
          <img :src="data" @click="handleImage(index)" />
        </detail-swiper-item>
      </detail-swiper>
    </footer>
  </div>
</template>
<script>
// import http01 from '@/util/http01'
import detailHeader from "@/components/DetailHeader";
import detailSwiper from "@/components/DetailSwiper";
import detailSwiperItem from "@/components/DetailSwiperItem";
import detailSwiperFirst from "@/components/DetailSwiperfirst";
import http02 from "@/util/http02";
import { ImagePreview } from "vant";
// Vue.use(ImagePreview)
import Vue from "vue"
import obj from '@/util/mixinObj'

Vue.directive("scroll", {
  inserted(el, binding) {
    el.style.display = "none";
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop > binding.value ||
        document.body.scrollTop > binding.value
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  // 销毁执行
  unbind() {
    window.onscroll = null;
  },
});
export default {
  mixins:[obj], // 混入
  data() {
    return {
      item: "",
    };
  },
  created() {
    // console.log(this.$route.params.myId)
    this.id = this.$route.params.myId;
  },
  mounted() {
    // http01.detailHttp(this.id).then((res)=>{
    //     // console.log(res.data.data.film)
    //     this.item = res.data.data.film
    // })
    http02(`/gateway?filmId=${this.id}&k=2370088`, {
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      //console.log(res.data.data.film.photos)
      this.item = res.data.data.film;
      // console.log(this.item)
    });
  },
  methods: {
    handleImage(index) {
      ImagePreview({
        images: this.item.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: "top-left"
      });
    },
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailSwiperFirst,
    detailHeader,
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  img {
    width: 450px;
    height: 350px;
  }
  div {
    margin: 10px;
    font-size: 20px;
    .filmName {
      font-size: 25px;
    }
  }
}
section {
  margin: 10px;
  .actor {
    font-size: 25px;
    margin-bottom: 20px;
  }
  img {
    width: 400px;
    height: 250px;
  }
  .dataName {
    font-size: 20px;
    text-align: center;
  }
  .dataRole {
    font-size: 18px;
    text-align: center;
  }
}
footer {
  margin: 10px;
  margin-bottom: 50px;
  .photo {
    font-size: 25px;
    margin-bottom: 20px;
  }
  img {
    width: 500px;
    height: 300px;
  }
}
</style>