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
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import {getuserlist} from '@services'
  import  C from '@consts'
  import {Coachlist_Userlist} from '../pagesmixin'
  export default {
    mixins: [Coachlist_Userlist],
    data() {
      return {
        tableconfig:[
          {prop:'id',label:'ID',width:this.percent},
          {prop:'name',label:'姓名',width:this.percent},
          {prop:'phoneNum',label:'手机号',width:this.percent},
          {prop:'timeRegister',label:'注册时间',width:this.percent},
          {prop:'timeActive',label:'活跃时间',width:this.percent}
        ]
      }
    },
    computed: {
      ...mapState({
        filterkey:state=>state.filterkey,
        currentpage:state=>state.module_userlist.currentpage
      }),
    },
    methods: {
      startInit(){
        this.getAllUsersInfo()
      },
      pageChange(currentPage){
        if(this.filterkey) return
        this.getAllUsersInfo(currentPage)
        this[C.USERLIST_PAGE_CHANGE_COMMIT](currentPage)
      },
      async getAllUsersInfo(pagenum=this.currentpage){
        const res=await getuserlist({params:{
          page:pagenum
        }})
        this.tableData=res.tableData
        this.totalnum=res.totalNum
        this.pagesize=res.pageSize
      },
      handleClick(row) {
      },
      ...mapMutations([C.USERLIST_PAGE_CHANGE_COMMIT])
    },
  }
</script>

<style lang="scss" scoped>

</style>
