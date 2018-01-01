import axios from 'axios'
import vm from '@/main.js'
import  C from '@consts'

const loading=function(data,status){
  if(data.loading){
    const self=data.loading[0]
    const args=data.loading.slice(1)
    args.forEach((arg)=>{ self[arg]=status })
  }
}
const alertMessage=function(message=数据请求发生错误){
  vm.$message({
    message:message,
    type:'error',
    duration:'2500',
    showClose:true
  })
}

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  alertMessage()
  return Promise.reject(error)
})

axios.defaults.timeout=10000
axios.interceptors.response.use(function (response) {
  return response.data.data
}, function (error) {
  if (axios.isCancel(error)) {
    console.log('Request canceled', error.message);
  } else {
    alertMessage('数据加载失败')
  }
  return Promise.reject(error)
})

let requestspool={}
const CancelToken = axios.CancelToken

function request(url='',type='get',data={},config={}){
  //路由参数：/user/{id}
  if(data.hasOwnProperty('params')){
    url=url.replace(/\{([A-Za-z]+)\}/g,function(match){
      return data.params[match.slice(1,-1)]
    })
  }
  //查询参数：/user?id=1
  const query=data.query
 //post参数 post内容
  const body=data.body

  //绑定到当前请求的加载状态开始开始加载状态
  loading(data,true)

  //请求池控制，同样的请求（即一样的url,不同的请求参数或post数据，只要url相同就算同一种请求），上次没请求完
  //的，直接abort掉，使用最新的请求
  if(requestspool.url){
    requestspool.url('同类请求主动取消，防止重复请求')
    requestspool.url=null
  }
  return axios({
    ...{
      method:type,
      params:query,
      data:body,
      url:url,
      cancelToken: new CancelToken(function executor(c) {
        if(!requestspool.url){
          requestspool.url=c
        }
      })
    },...config
  }).then(res=>{
    //绑定到当前请求的加载状态结束加载状态
    loading(data,false)
    return res
  })
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
