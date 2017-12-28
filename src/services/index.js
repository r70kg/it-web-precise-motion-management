import axios from 'axios'
import  C from '@consts'

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.defaults.timeout=5000
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

function request(url='',type='get',config={}){
  return axios({
    ...{
      method:type,
      url:url
    },...config
  }).then(res=>{return res})
}

export const getuserlist=(payload={})=>{
  return request(C.GET_USER_LIST,'get',payload)
}
export const getcoachlist=(payload={})=>{
  return request(C.GET_COACH_LIST,'get',payload)
}
