<template>
  <div>
    <input type="text" placeholder="用户名" v-model="name">
    <input type="password" placeholder="密码" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {login} from '@services'
export default {
  name: 'login',
  data () {
    return {
      name:'weixiaoyi',
      password:'weixiaoyi'
    }
  },
  created(){

  },
  methods:{
    async login(){
      const res=await login({body:{name:this.name,password:this.password}})
      if(this.$ISRESOK(res)){
        this.$router.push(this.$route.query.redirect||{name:'userslist'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
