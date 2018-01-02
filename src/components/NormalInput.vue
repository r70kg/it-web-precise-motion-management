<template>
  <div class="normalinput">
    <span class="icon"><i class="iconfont" :class='icon'></i></span>
    <input :type="type" :placeholder="placeholder" :value="value" @input="input($event.target.value)" />
    <img :src="src" @click="updateimg" v-if="src" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
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
      value:''
    }
  },
  methods:{
    input(value){
      console.log(value)
      this.$emit('input', value)
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .normalinput{
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
  img{
    height:.35rem;
    margin-top: -0.2rem;
    margin-left: -.1rem;
  }
  }


</style>
