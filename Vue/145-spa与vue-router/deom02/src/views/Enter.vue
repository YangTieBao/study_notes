<template>
    <section>
        <van-list  v-model="loading"
        :finished="finished"
        finished-text="没有更多了!!!"
        @load="onLoad"
        :immediate-check="false">
            <van-cell v-for="item in datalist" :key="item.filmId" @click="changePath(item.filmId)">
            <img :src="item.poster">
            <div>
                <div>
                    {{ item.name }}
                </div>
                <div :class="item.grade?'':'filmGrade'">
                    观众评分: {{ item.grade }}
                </div>
                <div class="actor">
                    主演: {{ item.actors | actorsFilter }}
                </div>
                <div>
                    {{ item.nation }} | {{ item.runtime }}
                </div>
            </div>
        </van-cell>
        </van-list>
    </section>
</template>
<script>
// import http01 from '@/util/http01'
import http02 from '@/util/http02'
import Vue from 'vue'

Vue.filter('actorsFilter',(data)=>{
    return data.map(item=>item.name).join(' ')
})
export default {
    data () {
        return {
            datalist:[],
            loading:false,
            finished:false,
            current:1,
            total:0
        }
    },
    mounted () {
        // http01.enterHttp().then((res)=>{
        //     console.log(res.data.data.films)
        //     this.datalist = res.data.data.films
        // })
        http02(`/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=5&type=1&k=1051896`, {
             headers: {
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then((res) => {
            console.log(res.data.data.films)
            this.datalist = res.data.data.films,
            this.total = res.data.data.total
        });
    },
    methods:{
        onLoad () {
            // 总长度匹配，禁止懒加载功能
            // 有个问题 ：当点进详情页面时，触发滚动条时，再返回页面，会直接触发一下加载（到底了）
            if(this.datalist.length === this.total){
                this.finished = true
                return
            }
            console.log('到底了！')
            this.current++
            http02(`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=5&type=1&k=1051896`, {
             headers: {
                'X-Host': 'mall.film-ticket.film.list'
            },
            }).then((res) => {
                console.log(res.data.data.films)
                this.datalist = [...this.datalist,...res.data.data.films]
                // loading 主动设置成false
                this.loading = false
            });
        },
        changePath(id){
            this.$router.push({
                name:'myDetail',
                params:{
                    myId:id
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
section{
    margin-left:10px;
    width:100%;
    margin-bottom: 100px;
    .van-list{
        .van-cell{
            overflow: hidden;
            margin-bottom:20px;
            margin-top:20px;
            img{
                width:300px;
                height:350px;
                float: left;
                padding-right:20px;
            }
            div{
                margin:10px;
                font-size: 20px;
                .actor{
                    width:200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
.filmGrade{
    visibility: hidden;
}
</style>