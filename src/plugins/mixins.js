import store from '@/store';
import {
  STATE,
  MUTATIONS,
} from '@/store/modules/global.d';

export const GlobalPlugin = {
  methods: {
    setLoading(boolean) {
      store.commit(`global/${MUTATIONS.setLoading}`, boolean);
    },

    setAlert(alert) {
      store.commit(`global/${MUTATIONS.setIsAlert}`, alert);
    },

    setEmptyAlert() {
      store.commit(`global/${MUTATIONS.setIsAlert}`, {});
    },

    startLoading() {
      this.setLoading(true);
    },
    closeLoading() {
      this.setLoading(false);
    }
  },
};

export default {
  install(VueInstance) {
    VueInstance.use(GlobalPlugin);
  }
}