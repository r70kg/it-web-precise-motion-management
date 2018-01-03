<template>
  <div>
    <ul class="tabheader">
      <li  style="cursor:pointer" :class="{'active':activekey==key1}" v-for="(value1,key1,index1) in title" :key="key1" @click="click(key1)">{{value1}}</li>
    </ul>
    <ul class="tabbody">
      <slot name="tabitem" v-for="(value2,key2,index2) in title" :tabitem="key2" :activekey="activekey" ></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabcoponent',
    props:{
      defaultkey:{
        type:String
      },
      title:{
        type:Object
      },
      change:{
        type:Function
      }
    },
    data(){
      return {
        activekey:this.defaultkey
      }
    },
    methods:{
      click(key){
        this.change(key,this.activekey)
        this.activekey=key
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue:#08D0EE;
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .tabheader{
    //border:1px solid red;
    height:0.8rem;
    align-items:center;
    display:flex;
    background:white;
    li{
      padding:10px 0;
      margin:0 0.6rem;
      font-size: .2rem;
      &.active{
        color:#263238;
        border-bottom:.04rem solid $blue;
      }
    }
  }
  .tabbody{
    margin:0.03rem 0;
    li{
      padding:0.32rem 0rem;
      background: white;
    }
  }
</style>
