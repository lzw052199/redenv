import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//动态组件注册的引用
import redEnvRegistry from 'components/content/redEnv/falling.js'
Vue.use(redEnvRegistry)//使用该注册组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// ios禁用手指双击缩放：
let lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  let now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);