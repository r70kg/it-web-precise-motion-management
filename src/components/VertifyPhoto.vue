<template>
  <div class="photos">
    <h6>{{label}}</h6>
    <ul class="list">
      <li v-for="(item,index) in photos" @click="click(index)" :key=""><img :src="getimgAdress(item,index)" />
        <i class="iconfont icon-tanhao" v-if="!item.status"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'photocomponent',
    props:{
      changephotostatus:{
        type:Function
      },
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
      click(index){
        this.changephotostatus(index)
      },
      getimgAdress(item,index){
        let name='img'+index
        return item[name]
      }
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
      font-size: .16rem;
      margin-right: 0.2rem;
      white-space:nowrap;
    }
    ul.list{
      width:5.1rem !important;
      display:flex;
      flex-wrap:wrap;
      li{
        position:relative;
        margin:.1rem;
        margin-top: 0;
        margin-bottom: .2rem;
        width: 2.25rem;
        height:1.5rem;
        background: #D8D8D8;
        i{
          font-size: .2rem;
          color:#FC7563;
          position:absolute;
          right:3px;
          bottom:3px;
        }

        img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
