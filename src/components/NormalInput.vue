<template>
  <div class="normalinputcontainer">
    <div class="normalinput" :class="{'active':isfocus,'err':status==false}">
      <span class="icon"><i class="iconfont" :class='icon'></i></span>
      <input  :type="type" :placeholder="placeholder" :value="value" @input="input($event.target.value)" @focus="focus" @blur="blur"  />
      <img :src="src" @click="updateimg" v-if="src" :class="{'marginleft':status!==null}" />
      <div class="statusicon" v-if="status!==null"><i class="iconfont icon-asmkticon0250" v-if="status"></i><i class="iconfont icon-asmkticon0246" v-if="!status"></i></div>
    </div>
    <div class="errmsg" v-if="errmsg">{{errmsg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:{
      value:{
        default:''
      },
      status:{
        default:null
      },
      errmsg:{
        default:''
      },
      onblur:{
        type:Function
      },
      updateimg:{
        type:Function
      },
      src:{
        default:''
      },
      icon:{
        default:''
      },
      type:{
        default:'text'
      },
      placeholder:{
        default:'请输入'
      }
    },
    data () {
      return {
        isfocus:false,
      }
    },
    methods:{
      input(value){
        this.$emit('input', value)
      },
      focus(){
        this.isfocus=true
      },
      blur(){
        this.onblur()
        this.isfocus=false
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .normalinputcontainer{
  .normalinput{
  &.active{
     border-bottom: 1px solid rgba(0,178,231,1) !important;
   }
  &.err{
     border-bottom:1px solid rgba(252,117,99,1);
   }
  width:3rem;
  border-bottom: 1px solid rgba(233,237,239,1);
  padding-bottom: .15rem;
  display:flex;
  .icon{
    margin-right: .2rem;
  }
  input{
    outline:none;
    height:100%;
    border:none;
  }
  input::-webkit-input-placeholder {
    color:rgba(133,151,161,.5);
  }
  img{
    height:.3rem;
    margin-top: 0rem;
  &.marginleft{
     margin-left: -.2rem;
   }
  }
  div.statusicon{
    display:flex;
    width:.1rem;
  //margin-left: .3rem;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  i.icon-asmkticon0250{
    color:rgba(0,178,231,1);
  }
  i.icon-asmkticon0246{
    color:rgba(252,117,99,1);
  }
  //border:1px solid red;
  }
  }
  .errmsg{
    font-size: .16rem;
    margin-top: .02rem;
    color:#fc7563
  }
  }



</style>
