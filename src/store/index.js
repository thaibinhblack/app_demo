import Vue from 'vue';
import VueStore from 'vuex';
import modules from '@/store/modules';

Vue.use(VueStore);


const store = new VueStore.Store({
  modules,
});

export default store;