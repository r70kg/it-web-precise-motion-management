<template>
  <div>
    <ul class="tabheader">
      <li  style="cursor:pointer" :class="{'active':activeindex==index}" v-for="(item,index) in tablist" :key="item.name" @click="click(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabcoponent',
    props:{
      tablist:{
        type:Array
      },
      change:{
        type:Function
      }
    },
    data(){
      return {
        activeindex:0
      }
    },
    methods:{
      click(index){
        this.activeindex=index
        this.change(index)
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
      &.active{
        border-bottom:2px solid $blue;
      }
    }
  }
  .tabbody{
    margin:0.03rem 0;
    li{
      padding:0.52rem 0.6rem;
      background: white;
    }
  }
</style>
