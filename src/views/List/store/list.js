import router from '../../../router';
import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import {message} from 'ant-design-vue'

export default {
  namespaced: true,

  state: {
    data: {
      list: [],
      pagination: {},
    }
  },

  actions: {

  },

  mutations: {

  }

}