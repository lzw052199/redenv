import {ADD_MONEY,STOP_GAME_TIME} from './mutations.type'
export default {
  [ADD_MONEY](state,monNum){//monNum传过来是一个string
    state.totalMoney += Number(monNum)
  },

  [STOP_GAME_TIME](state,payload){
    state.gameTime = payload.timeEnd
    state.isShow = payload.isShow
    console.log(1);
  }
}