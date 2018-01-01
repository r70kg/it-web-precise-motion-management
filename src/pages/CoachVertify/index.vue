<template>
  <div id="coachvertify">
    <Tab :title="config.title" :defaultkey="defaultkey" :change="changeTab" >
      <li slot="tabitem" slot-scope="props" v-show="props.activekey==props.tabitem" class="slot">
        <div class="loadingcontainer" v-loading="loading">
        <div class="left">
          <template  v-for="(item1,index1) in currentinfo">
            <vertify-input :label="config[props.activekey][key2]" :value="value2" :changeinputstatus="()=>changeInputStatus(index1)"  :status="item1['status']" v-for="(value2,key2) in item1"   v-if="config[props.activekey][key2]&&typeof value2!=='object'" :key="key2"></vertify-input>
          </template>
        </div>

        <div class="right">
          <template v-for="(item1,index1) in currentinfo">
            <vertify-photo  :label="config[props.activekey][key2]" :photos="value2"  :changephotostatus="(index2)=>changePhotoStatus(index1,index2,key2)" v-for="(value2,key2) in item1" v-if="config[props.activekey][key2]&&typeof value2=='object'" :key="key2"></vertify-photo>
          </template>
        </div>
        </div>
      </li>
    </Tab>
    {{currentinfo}}
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
        loading:false,
        defaultkey:'basicInfo',
        currentid:this.$route.params.id,
        currentinfo:{},
        buttonstatus:null
      };
    },
    methods: {
      async startInit(){
        this.getCoachInfo()
      },
      async getCoachInfo(info=this.defaultkey){
        const res=await getcoachinfo({params:{id:this.currentid},query:{info:info},loading:[this,'loading']})
        this.currentinfo=res.info
      },
      changeTab(key,activekey){
        if(activekey==key) return;
        this.currentinfo=null;
        this.getCoachInfo(key)
      },
      changeInputStatus(index){
        console.log((this.currentinfo[index]))
        this.currentinfo[index]['status']=!this.currentinfo[index]['status']
      },
      changePhotoStatus(index1,index2,key2){
        console.log((this.currentinfo[index1][key2][index2]))
        this.currentinfo[index1][key2][index2]['status']=!this.currentinfo[index1][key2][index2]['status']
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
  .loadingcontainer{
    width:100%;
    height:100%;
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
  }

</style>
