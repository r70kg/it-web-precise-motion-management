<template>
  <div id="coachvertify">
    <Tab :title="config.title" :defaultkey="defaultkey" :change="change">
      <li slot="tabitem" slot-scope="props" v-show="props.activekey==props.tabitem" class="slot">
        <div class="left">
          <template  v-for="(value1,key1,index1) in currentinfo">
            <vertify-input :label="config[props.activekey][key2]" :value="value2" v-for="(value2,key2,index2) in value1" :key="key2"  v-if="config[props.activekey][key2]&&typeof value2!=='object'"></vertify-input>
          </template>
        </div>

        <div class="right">
          <template v-for="(value1,key1,index1) in currentinfo">
            <vertify-photo  :photos="value2" :label="config[props.activekey][key2]" v-for="(value2,key2,index2) in value1" v-if="config[props.activekey][key2]&&typeof value2=='object'" :key="key2"></vertify-photo>
          </template>
        </div>
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
            birthday:'出生日期',
            cardImg:'身份证照片',
            front:'正面',
            back:'反面'
          },
          degreeInfo:{
            highestDegree:'最高学历',
            graduatedUniversity:'毕业院校',
            major:'所学专业',
            graduatedTime:'毕业时间',
            certificateImg:'毕业证书'
          },
          careerAbility:{
            jobTime:'从业时间',
            gym:'健身房全称(常驻)',
            gymAddress:'健身房地址（常驻）',
            jobCertificateImg:'从业证书',
            qualiCertificateImg:'资格证书'
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
      },
      change(key){
        this.currentinfo=null;
        this.getCoachInfo(key)
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
  li.slot{
    padding:0.52rem 0.6rem;
    background: white;
    display:flex;
    justify-content: space-between;
  .left{
    max-width: 4.6rem;
    flex-grow: 1;
    //border:1px solid red;
  }
  .right{
    margin-left: .6rem;
    display: flex;
    flex-wrap: wrap;
  }
  }
  }

</style>
