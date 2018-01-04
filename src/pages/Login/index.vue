<template>
  <div id="login">
    <img src="../../assets/bg_login1.png">
    <div class="inputinfo">
      <div>
        <div class="avatar"><div><i class="iconfont icon-yonghu"></i></div></div>
        <normal-input type='text' icon="icon-yonghu" placeholder="用户名" v-model="name" :status="statusname" :errmsg="errnamemsg"    :onblur="checkName"></normal-input>
        <normal-input type='password' icon="icon-suo" placeholder="密码" v-model="password" :status="statuspassword" :errmsg="errpasswordmsg" :onblur="checkPassword"></normal-input>
        <normal-input  placeholder="验证码" v-model="kaptcha" :status="statuskaptcha" :errmsg="errkaptchamsg" :onblur="checkKaptcha" :src="imgsrc" :updateimg="updateImg" ></normal-input>
        <div class="submit">
          <el-button type="primary"  plain round class="unpass"  @click="login">登陆</el-button>
          <!--<el-button type="primary" :loading="iconloading" plain round class="unpass" :disabled="culculatestatus" @click="login">登陆</el-button>-->
        </div>
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
        //chujunfei
        name:'',
        password:'',
        kaptcha:'',
        statusname:null,
        statuspassword:null,
        statuskaptcha:null,
        errpasswordmsg:'',
        errnamemsg:'',
        errkaptchamsg:'',
        imgsrc:'https://boss.icarbonx.com/bossauth/captcha-image.html',
      }
    },
    methods:{
      checkName(){
        if(!this.name){
          this.statusname=false
          this.errnamemsg='用户名不能为空'
          return false
        }else{
          this.statusname=true
          this.errnamemsg=''
          return true
        }

      },
      checkPassword(){
        if(!this.password){
          this.statuspassword=false
          this.errpasswordmsg='密码不能为空'
          return false
        }else{
          this.statuspassword=true
          this.errpasswordmsg=''
          return true
        }

      },
      checkKaptcha(){
        if(!this.kaptcha){
          this.statuskaptcha=false
          this.errkaptchamsg='验证码不能为空'
          return false
        }else{
          this.statuskaptcha=true
          this.errkaptchamsg=''
          return true
        }

      },
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
  .avatar{
    display:flex;
    justify-content: center;
    margin-bottom: .6rem;
  div{
  i{
    font-size: .3rem;
    font-weight: bold;
  }
  display:flex;
  justify-content: center;
  align-items: center;
  height:.6rem;
  width:.6rem;
  border-radius: 5rem;
  background-color: rgba(234,238,240,1);
  }
  //border:1px solid red;
  }
  position:absolute;
  background: transparent;
  width:5.1rem;
  height:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .normalinputcontainer{
  height:.8rem;
  }
  .normalinputcontainer+.normalinputcontainer{
    //margin-top: .3rem;
  }
  .submit{
    margin-top: .3rem;
    width:100% !important;
    display:flex;
    justify-content: center;
  button{
    font-size: .2rem;
    letter-spacing: .1rem;
    background-color: rgba(8,208,238,1);
    color:white;
    border:none;
    width:2rem;
    border-radius: 1rem;
    padding:.2rem 0;
  }
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
