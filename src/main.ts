import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as update from './update'
import axios from 'axios';

Vue.config.productionTip = false

axios.interceptors.response.use((response) => {
  update.update_from_cookies();
  return response;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
