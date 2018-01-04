<template >
  <div id="coachlist">
    <ele-table :tableData="filtertableData" :tableconfig="tableconfig" :pagechange="pageChange" :totalnum="filtertotalnum" :pagesize="pagesize" :page-size="pagesize" :currentpage="currentpage" :loading="loading" :setCellClass="setCellClass">
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            <el-tooltip :disabled='disabled(scope.row)' class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <i class="iconfont icon-dunpai"></i>
            </el-tooltip>
          </el-button>
        </template>
      </el-table-column>
    </ele-table>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
  import {getcoachlist} from '@services'
  import  C from '@consts'
  import {Coachlist_Userlist} from '@mixin'
  export default {
    mixins: [Coachlist_Userlist],
    data() {
      return {
        tableconfig:[
          {prop:'id',label:'ID',width:this.percent},
          {prop:'name',label:'姓名',width:this.percent},
          {prop:'phoneNum',label:'手机号',width:this.percent},
          {prop:'status',label:'状态',width:this.percent},
          {prop:'registerTime',label:'注册时间',width:this.percent},
          {prop:'updateTime',label:'更新时间',width:this.percent}
        ],
        loading:true,
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
        const res=await getcoachlist({params:{currentPage:pagenum},loading:[this,'loading']})
        this.tableData=res.resultSet
        this.totalnum=res.count
        this.pagesize=res.pageSize
      },
      handleClick(row) {
        this.$router.push({name:'coachvertify',params: {id:row.id}})
      },
      setCellClass({row, column, rowIndex, columnIndex}){
        if(row.status=='HasChecked') {
          switch(column.property){
            case 'status':
              return 'HasChecked'
              break
          }

        }
      },
      disabled(row){
        if(row.status=='Completed'){
          return false
        }
        return true

      },
      ...mapMutations([C.COACHLIST_PAGE_CHANGE_COMMIT])
    },
  }
</script>

<style lang="scss" scoped>

</style>
