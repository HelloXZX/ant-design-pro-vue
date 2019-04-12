import { query as queryUsers, queryCurrent } from '@/services/user';

export default {
  namespaced: 'user',

  state: {
    list: [],
    currentUser: {},
    loading: false,
  },

  actions: {
    async fetch({commit}) {
      const result = await queryUsers();
      commit('save', result)
    },
    async fetchCurrent({commit}) {
      const result = await queryCurrent();
      commit('saveCurrentUser', result)
    }
  },

  mutations: {
    save(state, payload) {
      state.list = payload;
    },
    saveCurrentUser(state, payload) {
      state.currentUser = payload || {};
    }
  }
}