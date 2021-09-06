<template>
  <div class="gameLoad">
    <!-- <div class="top">
      <slot name="top"></slot>
    </div> -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'GameLoad'
}
</script>

<style>
  .gameLoad{
    width: 58%;
    height: 15%;
    /* background: red; */
    display: flex;
    flex-direction:column;
    flex: 1;
    justify-content: center;
    align-content: center;
    text-align: center;
    position: absolute;
    bottom: 5%;
    left: 20%;
    font-size: 14px;
    line-height: 20px;
  }
 .bottom{
    color: #fbb6b3;
  }
  .center{
    margin:5px 0;
  }

</style>