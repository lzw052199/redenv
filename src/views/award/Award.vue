<template>
  <div class="award">
    <game-banner/>
    <with-draw/>
    <!-- <others/> -->
  </div>
</template>

<script>
import GameBanner from 'components/common/GameBanner'
import WithDraw from './childComps/WithDraw.vue'
// import Others from './childComps/Others.vue'
export default {
  name:'Award',
  components:{
    GameBanner,
    WithDraw,
    // Others,
  },
}
</script>

<style>
  .award{
    height: 100%;
    background: rgba(0, 0, 0, .8);
  }
</style>