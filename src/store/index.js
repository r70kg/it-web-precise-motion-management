import Vue from 'vue'
import Vuex from 'vuex'
import module_userlist from './userlist'
import state from './root-state'
import mutations from './root-mutations'
import getters from './root-getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    module_userlist:module_userlist
  },
  state,
  getters,
  mutations
})
