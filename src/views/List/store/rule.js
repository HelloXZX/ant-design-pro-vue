import router from '../../../router';
import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import {message} from 'ant-design-vue'

export default {
  namespaced: true,

  state: {
    loading: false,
    data: {
      list: [],
      pagination: {},
    }
  },

  actions: {
    async fetch({state, commit, dispatch}, payload) {
      commit('updateLoading', true);
      const result = await queryRule(payload);
      commit('save', result);
      commit('updateLoading', false);

    },
    async add({state, commit, dispatch}, payload) {
      commit('updateLoading', true);
      const result = await addRule(payload);
      commit('save', result);
      commit('updateLoading', false);
    },
    async remove({state, commit, dispatch}, payload) {
      commit('updateLoading', true);
      const result = await removeRule(payload);
      commit('save', result);
      commit('updateLoading', false);
    },
    async update({state, commit, dispatch}, payload) {
      commit('updateLoading', true);
      const result = await updateRule(payload);
      commit('save', result);
      commit('updateLoading', false);
    },
  },

  mutations: {
    save(state, payload) {
      state.data = payload;
    },
    updateLoading(state, payload) {
      state.loading = payload;
    }
  }

}