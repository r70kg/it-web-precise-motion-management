//URL
//const LOGIN='/user/login'
//const GET_COACH_INFO='/user/coach/{coachId}/{info}'
const GET_USER_LIST='/user/getAllUsersInfo'
const GET_COACH_LIST='/user/coaches/info/{currentPage}'
const VALIDATION_COACH_INFO='/user/coach/validation/{coachId}/info'

//const GET_USER_LIST='https://boss.icarbonx.com/bosssport/user/students/info/{currentPage}'
//const GET_COACH_LIST='https://boss.icarbonx.com/bosssport/user/coaches/info/{currentPage}'
const LOGIN='http://boss.icarbonx.com/bossauth/mlogin.do'
  const GET_COACH_INFO='http://boss.icarbonx.com/bosssport/user/coach/{coachId}/{info}'

const GET_USER_INFO='/user/info'
export default {
  GET_USER_LIST,
  GET_COACH_LIST,
  GET_COACH_INFO,
  LOGIN,
  GET_USER_INFO,
  VALIDATION_COACH_INFO
}
