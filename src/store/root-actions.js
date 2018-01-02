import {get_user_info} from '@services'
import  C from '@consts'
export default {
  async getUserInfo({ commit,state}, payload){
    const info=await get_user_info()
    commit(C.CHANGE_PERSONINFO_COMMIT,info)
  }
}


