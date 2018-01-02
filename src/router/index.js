import store from '@store'
import router from './routes.js'

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth===false)){
    next()
  }else{
    if(store.state.personInfo){
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
