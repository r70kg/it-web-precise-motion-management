<template>
  <div id="home">
    <div class="sidebar">
      <div class="logo"></div>
        <el-menu
          :router="true"
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#263238"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/userslist">用户列表</el-menu-item>
              <el-menu-item index="1-2" route="/coachlist">教练列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
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
      <div>Header</div>
      <div class="main">
        <div class="bread">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!--<filter-input v-model="filterkey"></filter-input>-->
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {FilterInput} from '@components'
  import  C from '@consts'
  export default {
    name: 'home',
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
      }
    },
    created(){
    },
    beforeRouteUpdate(to, from, next){
      this[C.FILTER_KEY_COMMIT]('')
      next()
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      ...mapMutations([
        C.FILTER_KEY_COMMIT
      ])
    },
    components:{FilterInput}
  }
</script>

<style lang="scss" scoped>
#home{
  height:100%;
  display: flex;
  .sidebar{
    width:2rem;
    height:100%;
    .logo{

    }
    .el-menu-vertical-demo{
      min-height:100%;
    }
  }
}

</style>
