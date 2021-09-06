<template>
  <div class="withDraw">
    <div class="totalMoney">
      <span>￥{{$store.getters.totalMoneyToFixed}}</span>
    </div>
    <img src="~assets/img/award.png" alt="">
    <div class="img"><img src="~assets/img/withdraw.png" alt=""></div>
   <!-- <div class="desc">
      <span>奖励已发送到您的个人账户中</span>
   </div> -->
  </div>
</template>

<script>
export default {
  name:'WithDraw',

}
</script>

<style>
  .withDraw{
    width: 100%;
    position: absolute;
    bottom: 45%;
    transform: translateY(50%);
  }
  .withDraw .totalMoney{
    width: 50.3%;
    height: 19%;
    position: absolute;
    top: 23%;
    left: 25%;
    font-size: 1.875rem;
    text-align: center;
    color: #FF0007;
  }
  .withDraw .totalMoney span{
  display: inline-block;
  position: absolute;
  bottom: 15%;
  left: 0;
  right: 0;
  }
  .withDraw .img{
    width: 42.9%;
    height: 15%;
    position: absolute;
    top: 65%;
    left: 28%;
  }
  /* .withDraw .desc{
    text-align: center;
    margin-top: -40px;
    color: #fff;
  } */
</style>