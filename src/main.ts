import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-sample/databases/(default)/documents';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
