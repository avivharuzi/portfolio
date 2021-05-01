import { createApp } from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Main app stylesheet.
import './scss/main.scss';

createApp(App).use(router).mount('#app');
