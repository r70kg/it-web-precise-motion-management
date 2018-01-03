//URL
const LOGIN='/user/login'
const GET_USER_LIST='/user/getAllUsersInfo'
const GET_COACH_LIST='/user/getAllCoachesInfo'
const GET_COACH_INFO='/user/coach/{coachId}/{info}'
const VALIDATION_COACH_INFO='/user/{coachId}/info'

//const LOGIN='https://boss.icarbonx.com/bossauth/mlogin.do'

const GET_USER_INFO='/user/info'
export default {
  GET_USER_LIST,
  GET_COACH_LIST,
  GET_COACH_INFO,
  LOGIN,
  GET_USER_INFO,
  VALIDATION_COACH_INFO
}
