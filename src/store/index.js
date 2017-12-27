import Vue from 'vue'
import Vuex from 'vuex'
import module_userlist from './userlist'
import state from './root-state'
import mutations from './root-mutations'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    module_userlist:module_userlist
  },
  state,
  mutations
})
