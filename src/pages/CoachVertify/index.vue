<template>
  <div id="coachvertify">
    <Tab :tab="tablistconfig.completeinfo" :change="change"></Tab>
    <ul class="tabbody">
      <li v-show='activekey==key1' :class="key1" v-for="(value1,key1,index1) in completeinfo" :key="key1">
        <div class="left">
          <vertify-input :label="tablistconfig[key1][key2]" value="一兆韦德南山公馆" v-for="(value2,key2,index2) in value1" :key="key2"></vertify-input>
        </div>
        <div class="right">
          <VertifyPhoto :photos="photos"></VertifyPhoto>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getcoachinfo} from '@services'
  import {mapState,mapMutations} from 'vuex'
  import {Tab,VertifyInput,VertifyPhoto} from '@components'
  import mixin from '@mixin'
  import  C from '@consts'
  export default {
    mixins: [mixin],
    name:'coachvertify',
    data() {
      return {
        tablistconfig: {
          completeinfo:{
            basicInfo:'基本信息',
            degreeInfo:'学历信息',
            careerAbility:'职业资质'
          },
          basicInfo:{
            name:'名字',
            sex:'性别',
            phoneNum:'手机号码',
            cert:'省份证号',
            birthday:'出生日期'
          },
          degreeInfo:{
            maxscholl:'最高学历',
            graduatefrom:'毕业院校',
            major:'所学专业',
            graduatetime:'毕业时间'
          },
          careerAbility:{
            careertime:'从业时间',
            gyn:'健身房全称(常驻)',
            gynaddress:'健身房地址（常驻）'
          }
        },
        photos:[
          {name:'照片1'},
          {name:'照片2'}
        ],
        completeinfo:{},
        basicinfo:{},
        activekey:'basicInfo'
      };
    },
    methods: {
      async startInit(){
        const res=await getcoachinfo({params:{id:this.$route.params.id}})
        this.completeinfo=res
        this.basicinfo=res.basicInfo
      },
      change(index,key){

        this.activekey=key
        console.log(this.activekey)
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
