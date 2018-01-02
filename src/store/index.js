import Vue from 'vue'
import Vuex from 'vuex'
import module_userlist from './userlist'
import module_coachlist from './coachlist'
import state from './root-state'
import mutations from './root-mutations'
import getters from './root-getters'
import actions from './root-actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    module_userlist,
    module_coachlist
  },
  state,
  getters,
  actions,
  mutations
})
