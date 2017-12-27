import  C from '@consts'
export default {
  [C.USERLIST_PAGE_CHANGE_COMMIT](state,payload){
    state.currentpage=payload
  },
}
