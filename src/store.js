import Vue from 'vue'
import Vuex from 'vuex'

import form from './views/Forms/store/index'
import rule from './views/List/store/rule'
import list from './views/List/store/list'
import profile from './views/Profile/store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form: form,
    rule: rule,
    list: list,
    profile: profile,
  }
})
