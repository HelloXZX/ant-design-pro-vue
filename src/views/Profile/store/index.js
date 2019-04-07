import { queryBasicProfile, queryAdvancedProfile } from '@/services/api';
import {replaceState} from 'vuex';

export default {
  namespaced: true,
  state: {
    data: {
      basicGoods: [],
      advancedOperation1: [],
      advancedOperation2: [],
      advancedOperation3: [],
      userInfo: {},
      application: {},
      basicProgress: [],
    },
    loading: false,
  },
  actions: {
    async fetchBasic({ commit }, payload) {
      commit('updateLoading', true)
      const response = await queryBasicProfile(payload);
      commit('show', response)
      commit('updateLoading', false)
    },
    async fetchAdvanced({ commit }, payload) {
      commit('updateLoading', true)
      const response = await queryAdvancedProfile();
      commit('show', response)
      commit('updateLoading', false)
    },
  },
  mutations: {
    show(state, payload) {
      state.data ={...state.data, ...payload}
    },
    updateLoading(state, payload) {
      state.loading = payload;
    }
  }
}