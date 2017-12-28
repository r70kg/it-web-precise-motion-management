<template>
  <div class="photos">
    <h6>身份证照片</h6>
    <ul class="list">
      <li v-for="item in photos" :key=""><img /></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'photocomponent',
    props:{
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
  .list{
    li{
      width:2.3rem;
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
