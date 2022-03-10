import App from './App'
import uView from 'uview-ui'
import store from './store'
import request from 'service/request.js'

Vue.use(uView)

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$store = store //将store挂载到vue原型上
Vue.prototype.$request = request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
