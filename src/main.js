import Vue from 'vue'
import router from './router/index'
import './utils/resetScreenSize'
import '@/assets/css/reset.css'
import App from './App.vue'
import 'vant/lib/index.css'
import moment from 'moment'
Vue.prototype.$moment = moment;
Vue.config.productionTip = false
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
