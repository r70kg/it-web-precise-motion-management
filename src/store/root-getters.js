import {getLocal} from '@utils'
export default {
  percent(){
    return (1/7)*100%+''
  },
  personInfo(state){
    return state.personInfo||getLocal('personInfo')
  }
}
