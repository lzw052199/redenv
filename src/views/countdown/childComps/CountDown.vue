<template>
  <div class="countDown">
    <div class="countDesc">
      <img src="~assets/img/countDown.png" alt="">
      <span>点击屏幕抢红包，抢到越多，中奖率越高</span>
    </div>
    <div class="count">
      <span>{{count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'CountDown',
  data(){
    return{
      count:3,//倒计时
      timer:null
    }
  },
  mounted(){
    const timer = setInterval(() => {
      this.count--;
      if(this.count == 0){
        clearInterval(timer)
        this.$router.replace('/redenvrain')
      }   
    }, 1000);
    
  }
}
</script>

<style>
  .countDown{
    height: 100%;
    position: relative;
    text-align: center;
  }
  .countDesc{
    position: absolute;
    top: 21.3%;
    left: 50%;
    transform: translate(-50%);
  }
  .countDesc img{
    display: block;
  }
  .countDesc span{
    font-size: 13px;
    line-height: 30px;
  }
  .count{
      width: 21.9%;
      height: 18.6%;
      font-size: 120px;
      color: #fff;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right:0;
      margin: auto;
  }
</style>