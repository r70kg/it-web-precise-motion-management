import  C from '@consts'
export default {
  [C.FILTER_KEY_COMMIT](state,payload){
    state.filterkey=payload
  },
}
