import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve)=>{require(['@pages/Home'],resolve)},
      children:[
        {
          name:'userslist',
          path:'userslist',
          component:(resolve)=>{require(['@pages/UsersList'],resolve)},
        },
        {
          name:'coachlist',
          path:'coachlist',
          component:(resolve)=>{require(['@pages/CoachList'],resolve)},
        },
        {
          name:'coachvertify',
          path:'coachvertify/:id',
          component:(resolve)=>{require(['@pages/CoachVertify'],resolve)},
        }
      ]
    },
    {
      name:'login',
      path:'/login',
      meta:{requireAuth:false},
      component:(resolve)=>{require(['@pages/Login'],resolve)},
    },
  ]
})


export default router
