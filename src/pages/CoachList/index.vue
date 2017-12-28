<template >
  <div id="coachlist">
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
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import {getcoachlist} from '@services'
  import  C from '@consts'
  import {Coachlist_Userlist} from '../pagesmixin'
  export default {
    mixins: [Coachlist_Userlist],
    data() {
      return {
        tableconfig:[
          {prop:'id',label:'ID',width:this.percent},
          {prop:'name',label:'姓名',width:this.percent},
          {prop:'phonenumber',label:'手机号',width:this.percent},
          {prop:'status',label:'状态',width:this.percent},
          {prop:'timeregister',label:'注册时间',width:this.percent},
          {prop:'timeactive',label:'活跃时间',width:this.percent}
        ]
      }
    },
    computed: {
      ...mapState({
        filterkey:state=>state.filterkey,
        currentpage:state=>state.module_coachlist.currentpage
      }),
    },
    methods: {
      startInit(){
        this.getAllCoachesInfo()
      },
      pageChange(currentPage){
        if(this.filterkey) return
        this.getAllCoachesInfo(currentPage)
        this[C.COACHLIST_PAGE_CHANGE_COMMIT](currentPage)
      },
      async getAllCoachesInfo(pagenum=this.currentpage){
        const res=await getcoachlist({params:{
          page:pagenum
        }})
        this.tableData=res.tableData
        this.totalnum=res.totalnum
        this.pagesize=res.pagesize
      },
      handleClick(row) {
        this.$router.push({name:'coachvertify',params: {id:1}})
      },
      ...mapMutations([C.COACHLIST_PAGE_CHANGE_COMMIT])
    },
  }
</script>

<style lang="scss" scoped>

</style>
