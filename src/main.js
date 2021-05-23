import Vue from 'vue';
import App from './App.vue';
import '@/plugins/bootstrap';
import router from '@/router';
import store from '@/store';
import '@/assets/scss/main.scss';
import i18n from '@/i18n';
import '@/services/http'
import mixins from '@/plugins/mixins';

Vue.use(mixins);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
