<template>
  <div class="inputcontainer" @click="click()" :class="{'error':!status}">
    <label :class="info">{{label}}</label>
    <div  class="content" readonly="readonly">{{value}}</div>
    <div class="tanhao" v-if="!status">
      <el-tooltip  class="item" effect="dark" content="点亮表达有误" placement="top">
        <i class="iconfont icon-tanhao"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vertifyInputcomponent',
    props:{
      info:{
        default:''
      },
      changeinputstatus:{
        type:Function
      },
      status:{

      },
      label:{
        type:String
      },
      value:{
        ddefault:''
      }
    },
    data () {
      return {
      }
    },
    methods:{
      input(value){
        this.$emit('input', value)
      },
      click(v){
        this.changeinputstatus()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .inputcontainer{
    &:first-child{
     padding-top: 0;
     }
    display: flex;
    //justify-content: space-between;
    width:100%;
    padding: 0.30rem 0 0.30rem 0;
    border-bottom: 1px solid rgba(0,178,231,1);
    &.error{
      border-bottom:1px solid #FC7563;
    }
    label{
      //border:1px solid red;
      height:.28rem;
      display:flex;
      align-items: center;
      //border:1px solid red;
      width:.8rem;
      &.careerInfo{
        width:1.6rem;
      }

    }
    div.content{
      max-width:2rem;
      //border:1px solid red;
      margin-left: .3rem;
      margin-right: .3rem;
      //flex-grow: 1;
      display:flex;
      align-items: center;
    }
    div.tanhao{
      margin:0;
      padding:0;
      flex-grow: 1;
      //border:1px solid red;
      display:flex;
      align-items: center;
      justify-content: flex-end;
      i{
        color:#FC7563;
        margin:0;
        padding:0;
        font-size: .23rem;
      }
    }
  }
</style>
