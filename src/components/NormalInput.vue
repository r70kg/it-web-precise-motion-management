<template>
  <div class="normalinput" :class="{'active':isfocus,'err':status==false}">
    <span class="icon"><i class="iconfont" :class='icon'></i></span>
    <input ref="input" :type="type" :placeholder="placeholder" :value="value" @input="input($event.target.value)" @focus="focus" @blur="blur" autocomplete="new-password" />
    <img :src="src" @click="updateimg" v-if="src" :class="{'err':status!==null}" />
    <div class="err" v-if="status!==null"><i class="iconfont icon-asmkticon0250" v-if="status"></i><i class="iconfont icon-asmkticon0246" v-if="!status"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props:{
      status:{
        default:null
      },
      onblur:{

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
        value:'',
        isfocus:false
      }
    },
    methods:{
      input(value){
        this.$emit('input', value)
      },
      focus(){
        this.isfocus=true
      },
      blur(status){
        //this.status=false
        //this.onblur()
        //console.log('ahah')
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
      &.err{
        margin-left: -.2rem;
      }
    }
    div.err{
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


</style>
