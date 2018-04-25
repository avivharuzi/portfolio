import Vue from 'vue'
import VueResourse from 'vue-resource'
import VeeValidate from 'vee-validate';

import App from './App'
import router from './router'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

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
