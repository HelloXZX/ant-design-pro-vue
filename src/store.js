import Vue from 'vue'
import Vuex from 'vuex'

import form from './views/Forms/store/index'
import rule from './views/List/store/rule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form: form,
    rule: rule,
  }
})
