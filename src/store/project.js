import { queryProjectNotice } from '@/services/api';

export default {
  namespaced: true,

  state: {
    notice: []
  },

  actions: {
    async fetchNotice({commit}) {
      const result = await queryProjectNotice();
      commit('saveNotice', result);
    }
  },

  mutations: {
    saveNotice(state, payload) {
      state.notice = payload;
    }
  }
}