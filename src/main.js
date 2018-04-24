import Vue from 'vue'
import VueResourse from 'vue-resource'
import VeeValidate from 'vee-validate';

import App from './App'
import router from './router'

import '@/scss/index.scss'

Vue.use(VueResourse)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
