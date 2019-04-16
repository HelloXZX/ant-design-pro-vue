import router from '../../../router';
import { fakeSubmitForm } from '@/services/api';
import {message} from 'ant-design-vue'

export default {
  namespaced: true,

  state: {
    step: {
      payAccount: 'xzx_1943@163.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
    loading: false,

  },

  actions: {
    async submitRegularForm({ commit}, payload) {
      commit('updateLoad', true);
      await fakeSubmitForm(payload);
      commit('updateLoad', false);
      message.success('提交成功');
    },
    async submitStepForm({commit}, payload) {
      commit('updateLoad', true);
      await fakeSubmitForm(payload);
      commit('saveStepFormData', payload);
      commit('updateLoad', false);
      router.push('/form/step-form/result');
    },
    async submitAdvancedForm({commit}, payload) {
      commit('updateLoad', true);
      await fakeSubmitForm(payload);
      commit('updateLoad', false);
      message.success('提交成功');
    },
  },

  mutations: {
    updateLoad(state, payload) {
      state.loading = payload;
    },
    saveStepFormData(state, payload) {
      state.step = {
        ...state.step,
        ...payload,
      }
    }
  },
  getters: {

  }
}