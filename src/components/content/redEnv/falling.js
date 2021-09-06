import Vue from 'vue'//导入vue实例
import Falling from './Falling.vue'//导入原组件
import store from 'store'
import {ADD_MONEY} from 'store/mutations.type'


const redEnvConstructor = Vue.extend(Falling)//vue实列构建组件

function createRedEnv (){
    // console.log(redEnvConstructor);
  const redEnvDom = new redEnvConstructor({//生成构建好的动态组件
    store,
    el:document.createElement('falling'),//被挂载的组件
    data(){//被挂在组件的data传入
      return {
        imgNum:1,
        imgShow:true, //是否点击 进行图片切换
        money:0,      //红包金额
        left:0,       //红包距左距离
        top:0,        //红包高度
        speed:0,      //红包每单位时间下降距离
        maxTop:100,   //红包掉落到底部的最大高度
      }
    },
  methods:{
    imgClick(){
      this.imgNum = 2
      this.money = (Math.random() * 5).toFixed(2)//0~5
      let monNum = this.money
      this.$store.commit(ADD_MONEY,monNum)//提交mutations方法
      this.imgShow = false
    }
  },
  mounted(){
    this.left =Math.random() * 69//最大left值
    this.speed = Math.random() + 0.3//0.3~1.3

    const fallTimer =setInterval(() => {
      this.top += this.speed
      if(parseInt(this.top) >= this.maxTop){
        clearInterval(fallTimer)
      }
    }, 20);
  }
  })
//   console.log(redEnvDom);//组件dom的全部参数
//   console.log(redEnvDom.money);
  this.$refs.redEnvRain.appendChild(redEnvDom.$el)//组件dom插入
}

function redEnvRegistry(){
    Vue.prototype.$falling = createRedEnv //原型添加动态组件的定义方法
}
export default redEnvRegistry//导出注册