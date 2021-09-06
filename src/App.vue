<template>
  <div id="app">
    <div class="red-packet-rain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/css/base.css";
.red-packet-rain{
  width: 100vw;
  height: 100vh;
  /* position: relative; */
  background:url(~assets/img/bg.png) center center /100% 100% no-repeat;
  overflow: hidden;
}

</style>
