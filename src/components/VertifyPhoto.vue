<template>
  <div class="photos">
    <h6>{{label}}</h6>
    <ul class="list">
      <li v-for="(item,index) in photos" @click.prevent="click(index)" @dblclick.prevent="dblclick(item,index)" :key=""><img :src="getimgAdress(item,index)" />
        <div class="hovershow" ><i class="iconfont icon-tanhao" v-if="!item.status"></i></div>
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
      dblclick(item,index){
        const src=this.getimgAdress(item,index)
        this.$alert(`<img class="message-box" src=${src}  />`, {
          center:true,
          customClass:'photos',
          dangerouslyUseHTMLString: true
        })
      },
      getimgAdress(item,index){
        let name='img'+index
        let id=item[name]
        return 'http://boss.icarbonx.com/bosssport/user/download/'+id

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
        .hovershow{
          right:0;
          bottom:0;
          width:100%;
          position:absolute;
          //background-color: rgba(0,0,0,.6);
          display:flex;
          justify-content: flex-end;
          i{
            margin-right: 3px;
            font-size: .2rem;
            color:#FC7563;
          }

        }

        img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
<style>
  .el-message-box.photos{
    max-height: 6rem;
    max-width: 5rem;
    padding:0;
  .el-message-box__wrapper{
    z-index: 100004 !important;
  }
  .el-message-box__content{
    padding:0 0;
  }

  .el-message-box__header{
    padding:0;
  }
  .el-message-box__btns{
    display: flex;
    justify-content: center;
    position:absolute;

  }
  img.message-box{
    padding:0;
    top:0;
    max-width: 100%;
  }

  }
  img.message-box{
    height: 100%;
    width: 100%;
  }
</style>
