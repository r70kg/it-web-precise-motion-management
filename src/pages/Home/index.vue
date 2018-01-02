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
        <el-submenu index="b">
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
      <div class="header">Header</div>
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
  import {mapState,mapMutations} from 'vuex'
  import {FilterInput,BreadCrumb} from '@components'
  import  C from '@consts'
  import mixin from '@mixin'
  import  getMenu from './menudata.js'
  import {get_user_info} from '@services'
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
        //console.log(this.menudata)
        return this.menudata[0].name
      }

    },
    beforeRouteUpdate(to, from, next){
      this[C.FILTER_KEY_COMMIT]('')
      next()
    },
    methods:{
      async getUserInfo(){
        get_user_info()
      },
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      ...mapMutations([
        C.FILTER_KEY_COMMIT
      ])
    },
    components:{FilterInput,BreadCrumb}
  }
</script>

<style lang="scss" scoped>
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
  .header{
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
