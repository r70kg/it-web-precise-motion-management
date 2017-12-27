<template >
  <div id="userlist">
  <el-table
    :data="filtertableData"
    :page-size="pagesize"
    :highlight-current-row="true"
    header-row-class-name="coolcolor"
    :stripe="true"
    style="width: 100%">
    <el-table-column :prop='item.prop' :label="item.label" :width="item.width" v-for="item in tableconfig" :key="item.id"></el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="tablefooter">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="currentChange"
        :total="filtertotalnum"
        :page-size="pagesize"
        :current-page.sync="currentpage"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import mixin from '@mixin'
  import {getuserlist} from '@services'
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
      ...mapState([
        'filterkey'
      ]),
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
      currentpage: {
        get () {
          return this.$store.state.module_userlist.currentpage
        },
        set (value) {
          this.$store.commit(C.USERLIST_PAGE_CHANGE_COMMIT, value)
        }
      },

    },
    methods: {
      startInit(){
        this.getUsersFromPage()
      },
      currentChange(currentPage){
        this.getUsersFromPage(currentPage)
      },
      async getUsersFromPage(pagenum=this.currentpage){
        const res=await getuserlist({params:{
          page:pagenum
        }})
        this.tableData=res.tableData
        this.totalnum=res.totalnum
        this.pagesize=res.pagesize
        //this.currentpage=res.currentpage
      },
      handleClick(row) {
        console.log(row);
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
