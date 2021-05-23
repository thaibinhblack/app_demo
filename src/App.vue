<template>
  <div id="app">
    <router-view />
    <base-loading :loading="loading" />
    <base-alert 
      v-for="(alert, index) in notify" 
      :key="index"
      v-model="alert.show" 
      :message="alert.message"
      :variant="alert.variant" />
  </div>
</template>

<script>
import BaseAlert from '@/components/stateless/BaseAlert';
import BaseLoading from '@/components/stateless/BaseLoading';
import { mapGetters } from 'vuex';
import {
  GETTERS,
} from '@/store/modules/global.d';

export default {
  name: 'App',

  components: {
    BaseLoading,
    BaseAlert,
  },
  
  methods: {
    setShow(show) {
      this.show = show;
    }
  },

  data: () => ({
    show: false ,
    notify: []
  }),


  computed: {
    ...mapGetters('global', {
      loading: [GETTERS.loading],
      alert: [GETTERS.isAlert],
    }),
  },

  watch: {
    alert(newAlert) {
      if(Object.entries(newAlert).length > 0) {
        this.setShow(2);
        this.notify.push({
          ...newAlert,
          show: 2
        });
      }
    },
  },
};
</script>
