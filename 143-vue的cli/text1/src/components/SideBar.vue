<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted () {
    // fetch('/maizuo.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res.data.films)
    //     this.datalist = res.data.films
    //   })
    axios.get('/maizuo.json').then(res => {
      this.datalist = res.data.data.films
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
