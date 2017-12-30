import {mapState,mapGetters,mapMutations} from 'vuex'
import mixin from '@mixin'
import {EleTable} from '@components'
import  C from '@consts'
export default {
  mixins: [mixin],
  data() {
    return {
      tableData: [],
      totalnum:1,
      pagesize:10,
      tableconfig:[]
    }
  },
  computed: {
    filtertableData(){
      if(!this.filterkey) return this.tableData
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
    // ...mapState({
    //   filterkey:state=>state.filterkey,
    //   currentpage:state=>state.module_userlist.currentpage
    // }),
    ...mapGetters(['percent'])
  },
  methods: {
    startInit(){
      //this.getAllUsersInfo()
    },
    pageChange(currentPage){
      // if(this.filterkey) return
      // this.getAllUsersInfo(currentPage)
      // this[C.USERLIST_PAGE_CHANGE_COMMIT](currentPage)
    },
    async getAllUsersInfo(pagenum=this.currentpage){
      // const res=await getuserlist({params:{
      //   page:pagenum
      // }})
      // this.tableData=res.tableData
      // this.totalnum=res.totalnum
      // this.pagesize=res.pagesize
    },
    handleClick(row) {
      //this.$router.push({name:'coachvertify',params: {id:1}})
      //console.log(row);
    },
    //...mapMutations([C.USERLIST_PAGE_CHANGE_COMMIT])
  },
  components:{EleTable}
}
