import { fakeChartData } from '@/services/api';

export default {
  namespaced: 'chart',

  state: {
    data: {
      visitData: [],
      visitData2: [],
      salesData: [],
      searchData: [],
      offlineData: [],
      offlineChartData: [],
      salesTypeData: [],
      salesTypeDataOnline: [],
      salesTypeDataOffline: [],
      radarData: [],
      loading: false,
    }
  },

  actions: {
    async fetch({commit}) {
      const result = await fakeChartData();
      commit('save',  result)
    },
  },

  mutations: {
    save(state, payload) {
      state.data = {
        ...state.data,
        ...payload,
      };
    }
  }
}