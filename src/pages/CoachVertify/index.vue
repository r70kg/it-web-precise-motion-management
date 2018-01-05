<template>
  <div id="coachvertify">
    <Tab :title="config.title" :defaultkey="defaultkey" :change="changeTab" >
      <li slot="tabitem" slot-scope="props" v-show="props.activekey==props.tabitem" class="slot">
        <div class="loadingcontainer" v-loading="infoloading">
          <div class="left">
            <template  v-for="(item1,index1) in currentinfo">
              <vertify-input :info="props.activekey" :label="config[props.activekey][key2]" :value="value2|filterinput(key2)" :changeinputstatus="()=>changeInputStatus(index1)"  :status="item1['status']" v-for="(value2,key2) in item1"   v-if="config[props.activekey][key2]&&typeof value2!=='object'" :key="key2"></vertify-input>
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
    <div class="footer" v-show="currentinfo&&infostatus=='Completed'">
      <el-button type="primary" :loading="iconloading&&!culculatestatus" plain round class="unpass" :disabled="culculatestatus" @click="vertify"><i v-if="!iconloading" class="iconfont icon-cuo"></i>信息有误</el-button>
      <el-button type="primary" :loading="iconloading&&culculatestatus" plain round class="pass" :disabled="!culculatestatus" @click="vertify"><i v-if="!iconloading" class="iconfont icon-kh_1"></i>审核通过</el-button>
    </div>
    <!--{{currentinfo}}-->
  </div>
</template>
<script>
  import {getcoachinfo,validatecoachinfo} from '@services'
  import {mapState,mapMutations} from 'vuex'
  import {Tab,VertifyInput,VertifyPhoto} from '@components'
  import mixin from '@mixin'
  import  C from '@consts'
  import {timeformer} from '@utils'
  export default {
    mixins: [mixin],
    name:'coachvertify',
    data() {
      return {
        sortnames:{
          basicInfo:['name','sex','phoneNum','cardNum','birthday','cards'],
          degreeInfo:['highestDegree','graduatedSchool','profession','graduatedDate','graduatedCertifications'],
          careerInfo:['workDate','gymnasiumName','gymnasiumAddress','workProve', 'careerCertification']
        },
        config: {
          title:{
            basicInfo:'基本信息',
            degreeInfo:'学历信息',
            careerInfo:'职业资质'
          },
          basicInfo:{
            name:'名字:',
            sex:'性别:',
            phoneNum:'手机:',
            cardNum:'省份证号:',
            birthday:'出生日期:',
            cards:'身份证照片:'
          },
          degreeInfo:{
            highestDegree:'最高学历:',
            graduatedSchool:'毕业院校:',
            profession:'所学专业:',
            graduatedDate:'毕业时间:',
            graduatedCertifications:'毕业证书:'
          },
          careerInfo:{
            workDate:'从业时间:',
            gymnasiumName:'健身房全称(常驻):',
            gymnasiumAddress:'健身房地址(常驻):',
            workProve:'从业证书:',
            careerCertification:'资格证书:'
          }
        },
        infoloading:true,
        iconloading:false,
        defaultkey:'basicInfo',
        currentid:this.$route.params.id,
        currentinfo:null,
        infostatus:null
      };
    },
    computed:{
      culculatestatus(){
        let results=[]
        let obj=this.currentinfo
        for(let i in obj){
          if(obj[i].hasOwnProperty('status')){
            results.push(obj[i]['status'])
          }else{
            for(let j in obj[i]){
              if(obj[i][j].length){
                obj[i][j].map((item)=>{
                  results.push(item.status)
                })
              }
            }
          }
        }
        results=results.filter((item)=>{return !item})
        if(results.length) return false
        return true
      }
    },
    methods: {
      async startInit(){
        this.getCoachInfo()
      },
      async getCoachInfo(info=this.defaultkey){
        const res=await getcoachinfo({params:{coachId:this.currentid,info:info},loading:[this,'infoloading']})
        this.infostatus=res.status
        this.currentinfo=this.sort(res.info,info)
      },
      changeTab(key,activekey){
        if(activekey==key) return;
        this.defaultkey=key;
        this.currentinfo=null;
        this.getCoachInfo(key)
      },
      changeInputStatus(index){
        if(this.iconloading||this.iconloading||this.infostatus!=='Completed') return;
        this.currentinfo[index]['status']=!this.currentinfo[index]['status']
      },
      changePhotoStatus(index1,index2,key2){
        if(this.iconloading||this.iconloading||this.infostatus!=='Completed') return;
        this.currentinfo[index1][key2][index2]['status']=!this.currentinfo[index1][key2][index2]['status']
      },
      async vertify(){
        const status=this.culculatestatus?'HasChecked':'NotPassed'
        await validatecoachinfo({params:{coachId:this.currentid},body:{type:this.defaultkey,status:status,info:this.currentinfo},loading:[this,'iconloading']})
        await this.startInit()
      },
      sort(currentinfo,key){
        let sort=[]
        for(let i in this.sortnames[key]){
          currentinfo.map((item)=>{
            for(let j in item){
              if(this.sortnames[key][i]==j){
                sort.push(item)
              }
            }
          })
        }
        return sort
      }
    },
    filters: {
      filterinput: function (value,key) {
        if(key=='sex'){
          value=0?value='男':value='女'
        }
        key=='birthday'?value=timeformer(value):''
        key=='graduatedDate'?value=timeformer(value):''
        if(key=='workDate'){
          value=`${value}年`
        }
        return value
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
    li.slot{
      .loadingcontainer{
        width:100%;
        height:100%;
        padding:0.32rem 0.6rem;
        background: white;
        display:flex;
        justify-content: space-between;
        .left{
          max-width: 4.6rem;
          flex-grow: 1;
        }
        .right{
          max-width: 6rem;
          justify-content: flex-end;
          margin-left: .6rem;
          display: flex;
          flex-wrap: wrap;
          .photos{
            max-width: 6rem;
          }
        }
      }
    }
  }
  .footer{
    margin-top: .3rem;
    display:flex;
    justify-content: center;
    .el-button--primary.is-plain.pass{
      background-color: #74D578;
      color:white;
    }
    .el-button--primary.is-plain.unpass{
      color:white;
      background-color: #FC7563;
    }
    .el-button--primary.is-plain{
      padding:.2rem .35rem;
      border-radius: .5rem;
      border:none;
      font-size: .2rem;
      &:disabled{
        border:1px solid #D8E0E4;
        color:#D8E0E4;
        background-color:transparent;
      }
      i{
        margin-right:.1rem;
      }
    }
    .el-button--primary+.el-button--primary{
      margin-left: .5rem;
    }
  }
</style>

