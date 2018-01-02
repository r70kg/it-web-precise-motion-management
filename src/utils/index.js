import Vue from 'vue'
import './rem.js'
import './normalize.css'
import Plugins from './plugins.js'
Vue.use(Plugins)

export const saveLocal=(name,value)=>{
  localStorage.setItem(name,JSON.stringify(value))
}

export const getLocal=(name)=>{
  return JSON.parse(localStorage.getItem(name))
}



