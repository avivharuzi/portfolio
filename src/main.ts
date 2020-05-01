import Vue from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Main app stylesheet.
import './scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
