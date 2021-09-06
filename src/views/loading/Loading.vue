<template>
    <div class="playLoad">
     <game-load class="gameLoading" v-if="this.move<100">
       <template #center>
         <div class="loading">
           <span>{{move}}%</span>
           <div class="ball"  :style='{"width":move+"%"}'></div>
         </div>
       </template>
       <template #bottom>
         <div class="loadingDesc" >
           <span>正在加载...</span>
         </div>
       </template>
     </game-load>
     <game-load class='gameStart' v-else>
       <!-- <template #top>
         <span>可用次数0/3</span>
       </template> -->
       <template #center>
         <div class="start" @click="startClick">
           <img src="~assets/img/start.png" alt="">
         </div>
       </template>
       <template #bottom>
         <span>当前已有{{userNum}}名用户参与</span>
       </template>
     </game-load>
    </div>
</template>

<script>
import GameLoad from 'components/content/GameLoad.vue'

export default {
  name:'Loading',
  components:{
    GameLoad
  },
  data(){
    return {
      move:10,                  //ball初始距离 进度条初始长度
      loadingSpeed:0,          //加载速度
      timer:null,
      userNum:0
    }
  },
  mounted(){
    this.userNum = parseInt(Math.random()*1000 + 1970000)
    this.timer = setInterval(() => {
      this.loadingSpeed = parseInt(Math.random() * 10) //0~10
      this.move += this.loadingSpeed;           //进度条加载
      
      if(this.move >= 100) {
        clearInterval(this.timer)
      }
    }, 100);
  },
  methods:{
    startClick(){
      this.$router.replace('/gamebody')
    }
  }
}
</script>

<style>
  .playLoad{
    width: 100%;
    height: 100%;
  }
  .gameLoading .center{
    width: 100%;
    height: 1.875rem;
    background: bisque;
    border: 1px solid #f78e39;
    border-radius: 15px;
  }
  .loading{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loading span{
    position: absolute;
    line-height: 30px;
    transform: translate(-50%);
  }
  .ball{
    width: 50%;
    height: 100%;
    border: 1px solid #f78e39;
    border-radius: 15px;
    background: #fd0;
  }

  .start{
    width:87.5%;
    height: 3.8125rem;
    margin: 0 auto;
  }
  .start img{
    width: 100%;
    height: 100%;
  }
  

</style>