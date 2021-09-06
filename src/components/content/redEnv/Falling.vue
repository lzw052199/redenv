<template>
    <div class="redEnv" ref="redEnv" @click.once="imgClick" 
              :style="{'left':this.left+'%','top':this.top+'%'}" 
              v-if="this.top<=maxTop">
      <img src="~assets/img/redEnv1.png" alt="" v-if="imgShow">
      <div class="open" v-else>
        <img src="~assets/img/redEnv2.png" alt="" >
        <span>+{{money}}</span>
      </div>
    </div>
</template>

<script>

export default {
  name:'Falling'
}
</script>

<style>
  .redEnv{
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 110px;
    height: 110px;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .open{
    position: relative;
    text-align: center;
  }
  .open span{
    position: absolute;
    left: 50%;
    transform: translate(-20%);
    color: rgba(255, 247, 1, 0.993);
    font-size: 20px;

  }
</style>