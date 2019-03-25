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
    async submitRegularForm({state, commit, dispatch, rootState}, payload) {
      commit('updateLoad', true);
      await fakeSubmitForm(payload);
      commit('updateLoad', false);
      message.success('提交成功');
    },
    async submitStepForm({state, commit, dispatch, rootState}, payload) {
      console.log('submit...')
      commit('updateLoad', true);
      await fakeSubmitForm(payload);
      commit('saveStepFormData', payload);
      commit('updateLoad', false);
      router.push('/form/step-form/result');
    },
    async submitAdvancedForm({ payload }, { call }) {
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
      console.log(state);
      state.step = {
        ...state.step,
        ...payload,
      }
    }
  },
  getters: {

  }
}