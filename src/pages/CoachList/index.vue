<template >
  <div id="coachlist">
    <ele-table :tableData="filtertableData" :tableconfig="tableconfig" :pagechange="pageChange" :totalnum="filtertotalnum" :pagesize="pagesize" :page-size="pagesize" :currentpage="currentpage">
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">审查</el-button>
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
          {prop:'id',label:'ID'},
          {prop:'name',label:'姓名'},
          {prop:'phoneNum',label:'手机号'},
          {prop:'status',label:'状态'},
          {prop:'timeRegister',label:'注册时间'},
          {prop:'timeActive',label:'更新时间'}
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
        const res=await getcoachlist({query:{page:pagenum}})
        this.tableData=res.tableData
        this.totalnum=res.totalNum
        this.pagesize=res.pageSize
      },
      handleClick(row) {
        this.$router.push({name:'coachvertify',params: {id:row.id}})
      },
      ...mapMutations([C.COACHLIST_PAGE_CHANGE_COMMIT])
    },
  }
</script>

<style lang="scss" scoped>

</style>
