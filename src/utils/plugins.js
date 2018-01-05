const Plugins={}
Plugins.install = function (Vue, options) {
  Vue.prototype.$ISRESOK = function (options) {
    if(options&&options.bossUser) return true
    return false
  }
}


export default Plugins
