<template>
  <div class="gameBody">
    <count-down/>
  </div>
</template>

<script>
import CountDown from  './childComps/CountDown.vue'
export default {
  name:'GameBody',
  components:{
    CountDown
  }
}
</script>

<style>
  .gameBody{
    height: 100vh;
    background: rgba(0, 0, 0, .8);
  }

  
</style>