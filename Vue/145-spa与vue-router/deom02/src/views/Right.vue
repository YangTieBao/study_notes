<template>
  <div>
    <!-- left-arrow 如果添加这个属性，则会有一个返回的符号 -->
    <van-nav-bar title="影院" :left-text="city" @click-left="changeCity">
      <template #right>
        <van-icon name="search" size="25" />
      </template>
    </van-nav-bar>
    <div id="cinemas">
      <ul>
        <!-- vuex 老的写法： $store.state.cinemasList -->
        <li v-for="item in cinemasList" :key="item.cinemaId">
          <div>
            <div class="cinemaName">{{ item.name }}</div>
            <div class="cinemaAdress">{{ item.address }}</div>
            <div class="cinemaName">{{ item.name }}</div>
            <div class="cinemaAdress">{{ item.address }}</div>
            <div class="cinemaName">{{ item.name }}</div>
            <div class="cinemaAdress">{{ item.address }}</div>
            <div class="cinemaName">{{ item.name }}</div>
            <div class="cinemaAdress">{{ item.address }}</div>
            <div class="cinemaName">{{ item.name }}</div>
            <div class="cinemaAdress">{{ item.address }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import http02 from "@/util/http02";
// betterScroll : 主要实现页面中拖动滚动、拉动属性等功能。
import BetterScroll from "better-scroll";
import { mapState,mapActions,mapMutations } from "vuex";
export default {
  data() {
    return {
      // cinemalist: [],
      city: this.$store.state.cityName, // vuex 老的写法
      //cityId: this.$store.state.cityId, // 老的 vuex 写法
    };
  },
  computed:{
    ...mapState(['cinemasList','cityId']) // vuex 新的写法
  },
  methods: {
    ...mapActions(['changeCinemas']), // vuex 新的写法
    ...mapMutations(['clearCinema']), // vuex 新的写法
    changeCity() {
      // console.log("City!");
      this.$router.push("/city");
      // vuex 老的写法 ： this.$store.commit('clearCinema')
      this.clearCinema() // 新的vuex写法
    },
  },
  mounted() {
    // http02(`gateway?cityId=${this.cityId}&ticketFlag=1&k=1674116`, {
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   console.log(res.data.data.cinemas);
    //   this.cinemalist = res.data.data.cinemas;
    //   this.$nextTick(() => {
    //     new BetterScroll("#cinemas", {
    //       click: true, // 配置允许点击事件
    //       scrollY: true, // 开启纵向滚动
    //       mouseWheel: true, //开启鼠标滚轮
    //       //disableMouse: false, //启用鼠标拖动
    //       //disableTouch: false, //启用手指触摸
    //       scrollbar: {
    //         fade: true,
    //       },
    //     });
    //   });
    // });

    // vuex老的写法 ：this.$store.state.cinemasList.length 
    if (this.cinemasList.length === 0) {    
      // vuex老的写法 : this.$store.dispatch("changeCinemas", this.cityId)
      this.changeCinemas(this.cityId).then((res) => {
        this.$nextTick(() => {
          new BetterScroll("#cinemas", {
            click: true, // 配置允许点击事件
            scrollY: true, // 开启纵向滚动
            mouseWheel: true, //开启鼠标滚轮
            //disableMouse: false, //启用鼠标拖动
            //disableTouch: false, //启用手指触摸
            scrollbar: {
              fade: true,
            },
          });
        });
      });
    } else {
      this.$nextTick(() => {
        new BetterScroll("#cinemas", {
          click: true, // 配置允许点击事件
          scrollY: true, // 开启纵向滚动
          mouseWheel: true, //开启鼠标滚轮
          //disableMouse: false, //启用鼠标拖动
          //disableTouch: false, //启用手指触摸
          scrollbar: {
            fade: true,
          },
        });
      });
    }
  },
};
</script>
<style lang="scss" scoped>
#cinemas {
  height: 804px;
  overflow: hidden;
  position: relative;
  .cinemaName {
    margin: 5px;
    font-size: 25px;
  }
  .cinemaAdress {
    margin: 5px;
    font-size: 20px;
  }
}
</style>