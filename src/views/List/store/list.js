import router from '../../../router';
import { queryFakeList, removeFakeList, updateFakeList } from '@/services/api';
import {message} from 'ant-design-vue'

export default {
  namespaced: true,

  state: {
    list: [],
    loading: false,
  },

  actions: {
    async fetch({ commit }, payload) {
      const response = await queryFakeList(payload);
      commit('queryList',  Array.isArray(response) ? response : [])
    },
    async appendFetch({ commit }, payload) {
      const response = await queryFakeList(payload);
      commit('appendList',  Array.isArray(response) ? response : [])
    },
    async removeFakeList({ commit }, payload) {
      //let callback;
      // if (payload.id) {
      //   callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      // } else {
      //   callback = addFakeList;
      // }
      const response = await removeFakeList(payload); // post
      commit('queryList', response)
    },
    async updateFakeList({ commit }, payload) {
      //let callback;
      // if (payload.id) {
      //   callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      // } else {
      //   callback = addFakeList;
      // }
      const response = await updateFakeList(payload); // post
      commit('queryList', response)
    },
  },

  mutations: {
    queryList(state, payload) {
      state.list = payload;
    },
    appendList(state, payload) {
      state.list = state.list.concat(payload);
    },
  }

}