<template>
  <div class="redRain" ref="redEnvRain">
    <game-banner v-show="true"/>
    <award v-if="isShow"/>
  </div>
</template>

<script>
import GameBanner from 'components/common/GameBanner'
import Award from 'views/award/Award'
export default {
  name:'RedEnvRain',
  components:{
    GameBanner,
    Award
  },
  data(){
    return {
      gameTime:0,
      isShow:false
    }
  },
  methods:{
    
  },
  mounted(){
    const timer = setInterval(() => {
      this.gameTime+=0.5
      //红包组件动态引用
      this.$falling()
      
      if(parseInt(this.gameTime) == 30){
        clearInterval(timer)
        this.$router.replace('/award')
        console.log('时间到了');
      }
    }, 500);
  }
}
</script>
 
<style>
  .redRain{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
  }
  
</style>