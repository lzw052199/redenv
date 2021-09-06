<template>
  <div class="gameBanner">
    <div class="end" v-show="$store.state.isShow">距结束<span>{{count}}</span>秒</div>
    <!-- <div class="fakeEnd" v-show="!$store.state.isShow">距结束<span>{{$store.state.gameTime}}</span>秒</div> -->
    <div class="fakeEnd" v-show="!$store.state.isShow"><span>游戏结束啦</span></div>
    <div class="mNum">
      <span>击中红包金额</span>
      <span>{{$store.getters.totalMoneyToFixed}}元</span>
    </div>
    <div class="time">
      <span>游戏时间</span>
      <span>{{$store.state.gameTime}}s</span>
    </div>
    <img src="~assets/img/banner.png" alt="">
    </div>
</template>

<script>
import {STOP_GAME_TIME} from 'store/mutations.type'
export default {
  name:'GameBanner',
  data(){
    return{
      count:30.0,//游戏结束倒计时
    } 
  },
  mounted(){
    const gameTimer = setInterval(() => {
      this.count = (this.count - 0.1).toFixed(1)
      if(this.count == 0){
        this.$store.commit(STOP_GAME_TIME,{timeEnd:'0.0',isShow:false})//倒计时结束跳转页面改值
        clearInterval(gameTimer)
      }
    }, 100);
  }
}
</script>

<style>
  .gameBanner{
    width: 100%;
    height:110px;
    position: absolute;
    top: 6.67%;
    font-size: 14px;
    color: #fbb6b3;
  }
  .gameBanner img{
      width: 100%;
      height: 100%;
  }
  .mNum{
    left:9.5%;
  }
  .time{
    right:9.5%;
  }
  .time,.mNum{
    position: absolute;
    top: 50%;
    text-align: center;
  }
  .mNum span,.time span{
      display: block;
      margin-bottom: 2px;
  }
  .end, .fakeEnd{
    position: absolute;
    left: 50%;
    top: 5px;
    transform: translate(-50%);
  }
  .end span{
    background: red;
    font-size: 18px;
    border-radius: 5px;
  }
</style>