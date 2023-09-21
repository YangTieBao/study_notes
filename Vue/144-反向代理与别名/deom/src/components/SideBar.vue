<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data">
                {{ data.nm }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    // fetch('/maizuo.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res.data.films)
    //     this.datalist = res.data.films
    //   })
    // axios.get('/maoyan.json').then(res => {
    //   console.log(res.data.data.hot)
    //   this.datalist = res.data.data.hot
    // })
    axios.get('/ytb/api/mmdb/movie/v3/list/hot.json?ct=%E6%B9%98%E6%BD%AD&ci=264&channelId=4').then(res => {
      // console.log(res.data.data.hot)
      this.datalist = res.data.data.hot
    })
  },
  data () {
    return {
      datalist: []
    }
  }
}
</script>
<style lang="scss" scoped>
// scoped 表示局部
ul{
  li{
    background:orange;
  }
}
</style>
