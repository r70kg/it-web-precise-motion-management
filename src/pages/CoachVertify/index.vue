<template>
  <div id="coachvertify">
    <Tab :tablist="tablistconfig" :change="change">
    </Tab>
    <ul class="tabbody">
      <li v-show='activeindex==0' class="index0">
        <div class="left">
          <vertify-input label="hahah" value="一兆韦德南山公馆"></vertify-input>
          <vertify-input label="hahahahh" value="深圳南山区前海路东方银座广场3楼"></vertify-input>
        </div>
        <div class="right">
          <VertifyPhoto :photos="photos"></VertifyPhoto>
        </div>
      </li>
      <li v-show='activeindex==1'>1</li>
      <li v-show='activeindex==2'>2</li>
    </ul>
  </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  import {Tab,VertifyInput,VertifyPhoto} from '@components'
  import  C from '@consts'
  export default {
    name:'coachvertify',
    data() {
      return {
        tablistconfig: [
          {name:'基本信息'},
          {name:'学历信息'},
          {name:'职业资质'}
        ],
        photos:[
          {name:'照片1'},
          {name:'照片2'}
        ],
        activeindex:0
      };
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      change(index){
        this.activeindex=index
      }
    },
    components:{Tab,VertifyInput,VertifyPhoto}
  };

</script>

<style lang="scss" scoped>
  $blue:#08D0EE;
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .tabbody{
    margin:0.03rem 0;
    li{
      padding:0.52rem 0.6rem;
      background: white;
      display:flex;
      justify-content: space-between;
      .left{
        flex-grow: 1;
        //width:4.5rem;
        //border:1px solid red;
      }
      .right{
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        //width:7.5rem;
        //width:45%;
        //border:1px solid red;
      }
    }
  }

</style>
