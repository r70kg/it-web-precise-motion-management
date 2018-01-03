import request from './axiosconfig'
import C from '@consts'

export const login=(payload)=>{
  return request(C.LOGIN,'post',payload)
}
export const get_user_info=(payload)=>{
  return request(C.GET_USER_INFO,'get',payload)
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

