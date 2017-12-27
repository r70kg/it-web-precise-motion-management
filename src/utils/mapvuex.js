import Vuex from 'vuex'
const {mapState} = Vuex
const Mapvuex={}
Mapvuex.install = function (Vue, options) {
  Vue.prototype.$mapState = function (methodOptions) {
    return mapState(methodOptions)
  }
}


export default Mapvuex
