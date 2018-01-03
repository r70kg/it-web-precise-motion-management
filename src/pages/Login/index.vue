<template>
  <div id="login">
    <img src="../../assets/bg_login1.png">
    <div class="inputinfo">
      <div>
        <div class="avatar"></div>
        <normal-input icon="icon-yonghu" placeholder="用户名" v-model="name"></normal-input>
        <normal-input type='password' icon="icon-suo" placeholder="密码" v-model="password"></normal-input>
        <normal-input  icon="" placeholder="验证码" v-model="kaptcha" :src="imgsrc" :updateimg="updateImg"></normal-input>
        <button @click="login">点击</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {login} from '@services'
  import  C from '@consts'
  import {getEncrytedPwd} from '@utils'
  import axios from 'axios'
  import {NormalInput} from '@components'
  export default {
    name: 'login',
    data () {
      return {
        name:'chujunfei',
        password:'chujunfei',
        kaptcha:'',
        imgsrc:'https://boss.icarbonx.com/bossauth/captcha-image.html',
      }
    },
    methods:{
      updateImg(){
        this.imgsrc=this.imgsrc+'?timestamp='+Date.now()
      },
      async login(){
        const res=await login({body:{
          userName:this.name,
          kaptcha:this.kaptcha,
          password:getEncrytedPwd(this.name,this.password,Math.random()),
          redirectUrl:'/'
        }})
        console.log(res)
        if(this.$ISRESOK(res)){
          this[C.CHANGE_PERSONINFO_COMMIT](res)
          this.$router.push(this.$route.query.redirect||{name:'userslist'})
        }
      },
      ...mapMutations([
        C.CHANGE_PERSONINFO_COMMIT
      ])
    },
    components:{NormalInput}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #login{
    height:100%;
    background-size: cover;
    display:flex;
    justify-content: flex-end;
    position:relative;
  .inputinfo{
    position:absolute;
    background: transparent;
    width:5.1rem;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  .normalinput+.normalinput{
    margin-top: .3rem;
  }
  }
  }
</style>
<style>
  .iconfont.icon-yonghu{
    font-weight: bold;
    font-size: .2rem;
  }
  .iconfont.icon-suo{
    font-weight: bold;
    font-size: .24rem;
  }
</style>
