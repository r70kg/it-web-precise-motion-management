import axios from 'axios'
import vm from '@/main.js'
import C from '@consts'
import router from '@router'
import qs from 'qs'
import store from '@store'

const loading=function(data,status){
  if(data.loading){
    const self=data.loading[0]
    const args=data.loading.slice(1)
    args.forEach((arg)=>{ self[arg]=status })
  }
}
const alertMessage=function(message='数据请求发生错误'){
  vm.$message({
    message:message,
    type:'error',
    duration:'2500',
    showClose:true
  })
}

axios.defaults.timeout=10000
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post' && config.type !== 'json') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  alertMessage()
  return Promise.reject(error)
})


axios.interceptors.response.use(function (res) {
  const errcode=res.data.errcode
  res=res.data.data||res.data||res
  if(errcode==C.ERR_NOTLOGIN){
    store.commit(C.CHANGE_PERSONINFO_COMMIT,null)
  }
  return res
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
  //路由参数合并到url：如/user/{id} {params:{id:1}} 合并为/user/1
  if(data.hasOwnProperty('params')){
    url=url.replace(/\{([A-Za-z]+)\}/g,function(match){
      return data.params[match.slice(1,-1)]
    })
  }
  //查询参数：/user?id=1 ,query即为data里的 params参数 {params:{}}
  const query=data.query
 //post参数 post内容, body即为data里的 body参数 :{body:{}}
  const body=data.body

  //绑定到当前请求的加载状态开始开始加载状态,data里的 loading参数{loading:[this,'loading']},第一个参数this为当前vue实例
  loading(data,true)

  //请求池控制，同样的请求（即一样的url,不同的请求参数或post数据，只要url相同就算同一种请求），上次没请求完
  //的，直接abort掉，使用最新的请求
  if(requestspool[url]){
    requestspool[url]('同类请求主动取消，防止重复请求')
    requestspool[url]=null
  }
  return axios({
    ...{
      method:type,
      params:query,
      data:body,
      url:url,
      cancelToken: new CancelToken(function executor(c) {
        if(!requestspool[url]){
          requestspool[url]=c
        }
      })
    },...config
  }).then(res=>{
    //绑定到当前请求的加载状态结束加载状态
    loading(data,false)
    return res
  }).catch((err)=>{
    loading(data,false)
  })
}

export default request

