<template >
  <div id="userlist">
    <ele-table :tableData="filtertableData" :tableconfig="tableconfig" :pagechange="pageChange" :totalnum="filtertotalnum" :pagesize="pagesize" :page-size="pagesize" :currentpage="currentpage">
      <el-table-column
      label="操作">
      <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
      </el-table-column>
    </ele-table>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import mixin from '@mixin'
  import {getuserlist} from '@services'
  import {EleTable} from '@components'
  import  C from '@consts'
  export default {
    mixins: [mixin],
    data() {
      return {
        tableData: [],
        totalnum:1,
        pagesize:10,
        tableconfig:[
          {prop:'id',label:'ID',width:(1/7)*100%+this.percent},
          {prop:'name',label:'姓名',width:this.percent},
          {prop:'phonenumber',label:'手机号',width:this.percent},
          {prop:'status',label:'状态',width:this.percent},
          {prop:'timeregister',label:'注册时间',width:this.percent},
          {prop:'timeactive',label:'活跃时间',width:this.percent}
        ]
      }
    },
    computed: {
      filtertableData(){
        return this.tableData.filter((currentValue)=>{
          return Object.keys(currentValue).some((key)=>{
            return String(currentValue[key]).indexOf(String(this.filterkey)) > -1
          })
        })
      },
      filtertotalnum(){
        if(this.filterkey) return this.filtertableData.length||1
        return this.totalnum
      },
      percent(){
        return (1/7)*100%+''
      },
      ...mapState({
        filterkey:state=>state.filterkey,
        currentpage:state=>state.module_userlist.currentpage
      }),
    },
    methods: {
      startInit(){
        this.getUsersFromPage()
      },
      pageChange(currentPage){
        if(this.filterkey) return
        this.getUsersFromPage(currentPage)
        this[C.USERLIST_PAGE_CHANGE_COMMIT](currentPage)
      },
      async getUsersFromPage(pagenum=this.currentpage){
        const res=await getuserlist({params:{
          page:pagenum
        }})
        this.tableData=res.tableData
        this.totalnum=res.totalnum
        this.pagesize=res.pagesize
      },
      handleClick(row) {
        this.$router.push({name:'coachvertify',params: {id:1}})
        //console.log(row);
      },
      ...mapMutations([C.USERLIST_PAGE_CHANGE_COMMIT])
    },
    components:{EleTable}
  }
</script>

<style lang="scss" scoped>

</style>
