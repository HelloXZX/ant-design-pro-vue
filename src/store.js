import Vue from 'vue'
import Vuex from 'vuex'

import form from './views/Forms/store/index'
import rule from './views/List/store/rule'
import list from './views/List/store/list'
import profile from './views/Profile/store/index'
import user from './store/user'
import activities from './views/Dashboard/store/activities'
import chart from './views/Dashboard/store/chart'
import project from './store/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form: form,
    rule: rule,
    list: list,
    profile: profile,
    user: user,
    activities: activities,
    chart: chart,
    project: project,
  }
})
