import axios from 'axios'
import vm from '@/main.js'
import  C from '@consts'

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  vm.$message({
    message:'数据请求发生错误',
    type:'error',
    duration:'2500',
    showClose:true
  })
  return Promise.reject(error)
})
axios.defaults.timeout=10000
axios.interceptors.response.use(function (response) {
  return response.data.data
}, function (error) {
  vm.$message({
    message:'数据加载失败',
    type:'error',
    duration:2500,
    showClose:true
  })
  return Promise.reject(error)
})

function request(url='',type='get',data={},config={}){
  //路由参数：/user/{id}
  if(data.params){
    url=url.replace(/\{([A-Za-z]+)\}/g,function(match){
      return data.params[match.slice(1,-1)]||''
    })
  }
  //查询参数：/user?id=1
  const query=data.query
 //post参数 post内容
  const body=data.body

  return axios({
    ...{
      method:type,
      params:query,
      data:body,
      url:url
    },...config
  }).then(res=>{return res})
}

export const getuserlist=(payload={query:{page}})=>{
  return request(C.GET_USER_LIST,'get',payload)
}
export const getcoachlist=(payload={query:{page}})=>{
  return request(C.GET_COACH_LIST,'get',payload)
}
export const getcoachinfo=(payload={params:{id},query:{info}})=>{
  return request(C.GET_COACH_INFO,'get',payload)
}
