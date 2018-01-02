<template>
  <div id="home">
    <div class="sidebar">
      <div class="logo"></div>
      <el-menu
        :router="true"
        :default-active="routename"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#263238"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="userslist" route="/userslist">用户列表</el-menu-item>
            <el-menu-item index="coachlist" route="/coachlist">教练列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2" route="">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>

    </div>
    <div class="content">
      <div class="header">
        <div class="avatar"><i class="iconfont icon-touxiang"></i></div>
        <el-dropdown @command="loginOut" v-if="personInfo">
         <span class="el-dropdown-link">
           {{personInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
         </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
      <div class="main">
        <div class="bread">
          <bread-crumb :menudata="menudata"></bread-crumb>
          <!--<filter-input v-model="filterkey"></filter-input>-->
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  import {FilterInput,BreadCrumb} from '@components'
  import  C from '@consts'
  import mixin from '@mixin'
  import  getMenu from './menudata.js'
  export default {
    name: 'home',
    mixins: [mixin],
    data () {
      return {
      }
    },
    computed:{
      filterkey:{
        get(){
          return this.$store.state.filterkey
        },
        set(value){
          this[C.FILTER_KEY_COMMIT](value)
        }
      },
      menudata(){
        return  getMenu(this.$route.name)
      },
      routename(){
        return this.menudata[0].name
      },
      ...mapGetters([
        'personInfo'
      ])
    },
    beforeRouteUpdate(to, from, next){
      this[C.FILTER_KEY_COMMIT]('')
      next()
    },
    methods:{
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      loginOut(){
        this[C.CHANGE_PERSONINFO_COMMIT](null)
        window.location.reload()
      },
      ...mapMutations([
        C.FILTER_KEY_COMMIT,C.CHANGE_PERSONINFO_COMMIT
      ]),
      ...mapActions([
        'getUserInfo'
      ])
    },
    components:{FilterInput,BreadCrumb}
  }
</script>

<style lang="scss" scoped>
  $blue:#08D0EE;
  #home{
    height:100%;
    .sidebar{
      z-index: 10001;
      position:fixed;
      width:2.3rem;
      height:100%;
      .logo{
        background-color: white;
        background-image: url('../../assets/logo.png');
        background-size:100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height:0.66rem;
      }
      .el-menu-vertical-demo{
        min-height:100%;
      }
    }
    .content{
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      margin-left: 2.3rem;
      position:relative;
      .header{
        .icon-touxiang{
          font-size: .4rem;
          color:rgb(0, 180, 206);
          margin-right:.15rem;
        }
        color:#FF263238;
        flex-grow: 1;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0rem 2.9rem;
        width:100%;
        height:0.66rem;
        background: white;
        z-index: 10001;
        position:fixed;
        -moz-box-shadow:0px 2px 8px #9E9E9E; -webkit-box-shadow:0px 2px 8px #9E9E9E; box-shadow:0px 2px 8px #9E9E9E;
      }
      .main{
        margin-top: 0.66rem;
        padding: 0.44rem 0.6rem;
        width:100%;
      }
    }
  }

</style>
