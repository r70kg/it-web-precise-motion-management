<template>
  <div class="photos">
    <h6>{{label}}</h6>
    <ul class="list">
      <li v-for="(item,index) in photos" @click.prevent="click(index)" @dblclick.prevent="dblclick(item,index)" :key=""><img :src="getimgAdress(item,index)" />
        <div class="hovershow" v-if="!item.status">
          <el-tooltip  class="item" effect="dark" content="点亮表达有误" placement="top">
            <i class="iconfont icon-tanhao" ></i>
          </el-tooltip>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import C from '@consts'
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
        this[C.CHANGE_TOPMODELSTATUS_COMMIT]({
          show:true,
          bodyhtml:'<img src='+src+' />',
          classname:'photo',
          closehtml:'<div class="back"><i class="iconfont icon-cuo"></div></i>'
        })
//        this.$alert(`<img class="message-box" src=${src}  />`, {
//          center:true,
//          customClass:'photos',
//          dangerouslyUseHTMLString: true
//        })
      },
      getimgAdress(item,index){
        let name='img'+index
        let id=item[name]
        return 'http://boss.icarbonx.com/bosssport/user/download/'+id

      },
      clickme(){
        console.log('ahahha')
      },
      ...mapMutations([C.CHANGE_TOPMODELSTATUS_COMMIT])
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
<style lang="scss">
  #topmodel.photo{
    display: flex;
    justify-content: center;
    align-items: center;
  .body{
    overflow: auto;
    max-height: 7rem;
    max-width: 16rem;
  }
  .close{
    margin-top: .2rem;
    display: flex;
    justify-content: center;
  div.back{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10rem;
    width:.4rem;
    height:.4rem;
    background:#979797;
    color:white;
  }
  }
  }
</style>
