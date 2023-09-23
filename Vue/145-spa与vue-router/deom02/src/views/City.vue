<template>
  <div>
    <van-index-bar :index-list="cityList | filterlist" @select="handleSelect">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
        <van-cell
          :title="item.name"
          v-for="item in data.list"
          :key="item.cityId"
          @click="selectCity(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import http from '@/util/http02';
import Vue from 'vue'
import {Toast} from 'vant'
Vue.filter('filterlist',(data)=>{
    return data.map(item=>item.type)
})
export default {
    data () {
        return{
            cityList:[]
        }
    },
    mounted () {
        this.$store.commit('hide'),
        http('/gateway?k=5155748',{
            headers:{
                'X-Host':'mall.film-ticket.city.list'
            }
        }).then(res=>{
            //console.log(res.data.data.cities)
            this.cityList = this.renderCity(res.data.data.cities)
            console.log(this.cityList)
        })
    },
    methods:{
        renderCity(list){
            // console.log(list)
            var cityList = []
            var letterList = []
            for(var i=65;i<91;i++){
                //console.log(String.fromCharCode(i))
                letterList.push(String.fromCharCode(i))
            }
            ///console.log(letterList)
            letterList.forEach(letter=>{
                // console.log(list.map(item=>item.pinyin))
                var newList = list.filter(item => item.pinyin.substring(0,1).toUpperCase() === letter)
                // console.log(newList)

                newList.length > 0 && cityList.push({
                    type:letter,
                    list:newList
                })
            })
            // console.log(cityList)
            return cityList
        },
        handleSelect(data){
            Toast(data)
        },
        selectCity(data){
            //console.log(data.name,data.cityId)
            //vuex ---- 状态管理模式
            // 这样改非常危险，容易出错
            //this.$store.state.cityName = data.name
            this.$store.commit('changeCity',data)
            this.$router.back()
        }
    },
    destroyed () {
        this.$store.commit('show')
    }
}
</script>