import {
  STATE,
  GETTERS,
  MUTATIONS,
  ACTIONS
} from '@/store/modules/global.d';

const state = {
  [STATE.loading] : false,
  [STATE.isAlert] : {}
};

const getters = {
  [GETTERS.loading] : (st) => {
    return st[STATE.loading];
  },
  [GETTERS.isAlert] : (st) => {
    return st[STATE.isAlert];
  },
};

const mutations = {
  [MUTATIONS.setLoading] : (st, payload) => {
    st[STATE.loading] = payload;
  },
  [MUTATIONS.setIsAlert] : (st, payload) => {
    st[STATE.isAlert] = payload;
  },
};

const actions = {
  [ACTIONS.setLoading] : ({ commit }, payload) => {
    commit(MUTATIONS.setLoading, payload);
  },
  [ACTIONS.setIsAlert] : ({  commit }, payload) => {
    commit(MUTATIONS.setIsAlert, payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
