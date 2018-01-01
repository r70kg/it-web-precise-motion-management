<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" >
    <el-breadcrumb-item :to="{ name:'home'}" v-for="(item,index) in menudata" :key="item.name">{{item.desc}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'BreadCrumbcomponent',
    props:{
      menudata:{
        type:Array
      }
    },
    data () {
      return {

      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .bread{
    display: flex;
    justify-content:space-between;
  .el-breadcrumb{
    margin-bottom: 0.3rem;
  span{
    font-size: 0.2rem;
  }}
  }
</style>
