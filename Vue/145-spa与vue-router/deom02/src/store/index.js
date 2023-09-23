import Vue from 'vue'
import Vuex from 'vuex'
import http02 from "@/util/http02"
import createPersistedState from 'vuex-persistedstate' // vuex 持久化

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  // plugins:[createPersistedState()] 这个是默认所有的 state 数据都持久化
  plugins:[createPersistedState({
    // 这个属性是只有 return 里面的数据是 vuex 持久化
    reducer:(state)=>{
      return {
        cityId:state.cityId,
        cityName:state.cityName
      }
    }
  })],
  // 保存公共状态
  state: {
    cityId:'430300',
    cityName:'湘潭',
    cinemasList : [],
    isshowTabbar: true
  },
  getters: {
  },
  // 只能支持同步
  mutations: {
    changeCity(state,city){
      state.cityName = city.name
      state.cityId = city.cityId
    },
    changeCinema(state,data){
      state.cinemasList = data
    },
    clearCinema(state){
      state.cinemasList = []
    },
    show(state){
      state.isshowTabbar = true
    },
    hide(state){
      state.isshowTabbar = false
    }
  },
  // 支持同步与异步
  actions: {
    changeCinemas(store,cityId){
      //console.log('缓存的影院！')
      return http02(`gateway?cityId=${cityId}&ticketFlag=1&k=1674116`, {
        headers: {
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        // console.log(res.data.data.cinemas);
        // store.state.cinemasList = res.data.data.cinemas;
        store.commit('changeCinema',res.data.data.cinemas)
      });
    }
  },
  modules: {
  }
})

// vuex 管理保存公共状态，（分散在各个组件内的状态，统一管理）

//注意：
// vuex 默认是管理在内存，一刷新页面，公共状态就丢失了
// vuex 持久化-- todo

// vuex 项目应用
// 1.非父子的通信
// 2.后端数据的缓存快照，减少重复数据的请求，减轻服务器压力，提高用户体验
