import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@styles/index.scss'
import '@utils'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
const vm=new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default vm
