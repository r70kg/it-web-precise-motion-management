<template>
  <div id="coachvertify">
    <Tab v-bind="config" :defaultkey="defaultkey" :change="change">
      <li slot="tabitem" slot-scope="props" v-show="props.activekey==props.tabitem">
        <div v-for="(value1,key1,index1) in currentinfo" :key="key1">
          <div class="left">
            <div v-for="(value2,key2,index2) in value1" v-if="value1.status">{{value2}}</div>
          </div>
        </div>

        <!--<div class="left">-->
          <!--<div v-for="(value2,key2,index2) in value1" >haahah</div>-->
          <!--&lt;!&ndash;<vertify-input :label="tablistconfig[key1][key2]" value="一兆韦德南山公馆" v-for="(value2,key2,index2) in value1" :key="key2"></vertify-input>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="right">-->
          <!--<VertifyPhoto :photos="photos"></VertifyPhoto>-->
        <!--</div>-->
      </li>
    </Tab>
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
        config: {
          title:{
            basicInfo:'基本信息',
            degreeInfo:'学历信息',
            careerAbility:'职业资质'
          },
          basicInfo:{
            name:'名字',
            sex:'性别',
            phoneNum:'手机号码',
            card:'省份证号',
            birthday:'出生日期'
          },
          degreeInfo:{
            highestDegree:'最高学历',
            graduatedUniversity:'毕业院校',
            major:'所学专业',
            graduatedTime:'毕业时间'
          },
          careerAbility:{
            jobTime:'从业时间',
            gym:'健身房全称(常驻)',
            gymAddress:'健身房地址（常驻）'
          }
        },
        defaultkey:'basicInfo',
        currentid:this.$route.params.id,
        currentinfo:{},
      };
    },
    methods: {
      async startInit(){
        this.getCoachInfo()
      },
      async getCoachInfo(info=this.defaultkey){
        const res=await getcoachinfo({params:{id:this.currentid},query:{info:info}})
        this.currentinfo=res.info
        console.log(this.currentinfo)
      },

      change(key){
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
