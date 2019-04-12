import { queryActivities } from '@/services/api';

export default {
  namespaced: 'activities',

  state: {
    list: [],
  },

  actions: {
    async fetchList({commit}) {
      const result = await queryActivities();
      commit('saveList',  Array.isArray(result)?result:[])
    },
  },

  mutations: {
    saveList(state, payload) {
      state.list = payload;
    }
  }
}