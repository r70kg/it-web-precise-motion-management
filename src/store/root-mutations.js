import  C from '@consts'
import {saveLocal} from '@utils'
export default {
  [C.USERLIST_PAGE_CHANGE_COMMIT](state,payload){
    state.module_userlist.currentpage=payload
  },
  [C.COACHLIST_PAGE_CHANGE_COMMIT](state,payload){
    state.module_coachlist.currentpage=payload
  },
  [C.FILTER_KEY_COMMIT](state,payload){
    state.filterkey=payload
  },
  [C.CHANGE_PERSONINFO_COMMIT](state,payload){
    state.personInfo=payload
    saveLocal('personInfo',state.personInfo)
    if(!payload){
      window.location.reload()
    }
  },
}
