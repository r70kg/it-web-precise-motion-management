<template>
  <div class="inputcontainer">
    <label>{{label}}</label>
    <input :value="value" @input="input($event.target.value)" readonly="true" />
    <span><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'vertifyInputcomponent',
    props:{
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
    width:100%;
    padding: 0.35rem 0 0.35rem 0;
    border-bottom: 1px solid rgba(0,178,231,1);
    label{
      width:1.3rem;
    }
    input{
      text-align: left;
      border:none;
      margin-left: 0.3rem;
    }
  }
</style>
