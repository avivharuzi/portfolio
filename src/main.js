import Vue from 'vue'
import VueResourse from 'vue-resource'

import App from './App'
import router from './router'

import '@/scss/index.scss'

Vue.use(VueResourse)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
