const Plugins={}
Plugins.install = function (Vue, options) {
  Vue.prototype.$ISRESOK = function (options) {
    if(options.errcode==0) return true
    return false
  }
}


export default Plugins
