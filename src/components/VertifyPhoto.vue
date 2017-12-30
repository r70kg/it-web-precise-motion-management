<template>
  <div class="photos">
    <h6>{{label}}</h6>
    <ul class="list">
      <li v-for="item in photos" :key=""><img /><span>hahah</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'photocomponent',
    props:{
      label:{
        type:String
      },
      photos:{
        type:Array
      },
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
  .photos{
    display: flex;
  h6{
    white-space:nowrap;
  }
  .list{
    display:flex;
  li{
    min-width: 2rem;
    flex-flow: 1;
  //width:2.3rem;
    height:1.5rem;
    background: #D8D8D8;
  }
  li+li{
    margin-left: .2rem;
  }

  display:flex;
  }

  }
</style>
