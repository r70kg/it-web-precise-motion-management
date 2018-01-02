import store from '@store'
import router from './routes.js'
import {saveLocal} from '@utils'

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth===false)){
    next()
  }else{
    if(store.getters.personInfo){
      next()
    }else{
      next({
        name:'login',
        query: {redirect: to.fullPath}
      })
    }
  }
})

export default router
