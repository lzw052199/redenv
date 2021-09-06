import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  totalMoney:0,//点击获得红包总金额
  gameTime:30,//游戏时间
  isShow:true//时间剩余时间的切换
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
})

export default store