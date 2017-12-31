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
  .photos+.photos{
    margin-top: .5rem;
  }
  .photos{
    width:100%;
    display: flex;
    justify-content:flex-end;

  h6{
    //border:1px solid red;
    font-size: .16rem;
    margin-right: 0.2rem;
    white-space:nowrap;
  }
  ul.list{
    width:5.1rem !important;
    //border:1px solid blue;
    display:flex;
    flex-wrap:wrap;
  li{
    margin:.1rem;
    margin-top: 0;
    margin-bottom: .2rem;
    width: 2.3rem;
    height:1.5rem;
    background: #D8D8D8;
  }
  }
  }
</style>
