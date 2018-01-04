<template >
  <div>
    <el-table
      :data="tableData"
      :highlight-current-row="true"
      header-row-class-name="coolcolor"
      :stripe="true"
      style="width: 100%"
      :cell-class-name="setCellClass"
      v-loading="loading">
      <el-table-column :prop='item.prop' :label="item.label" :width="item.width" v-for="item in tableconfig" :key="item.id" :class-name="item.prop">
      </el-table-column>
      <slot></slot>
    </el-table>
    <div class="tablefooter">
      <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pagechange"
      :total="totalnum"
      :page-size="pagesize"
      :current-page="currentpage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      tableData:{
        type:Array,
        default:[]
      },
      tableconfig:{
        type:Array,
        default:[]
      },
      pagesize:{
        type:Number,
        default:10
      },
      pagechange:{
        type:Function
      },
      totalnum:{
        type:Number,
        default:1
      },
      currentpage:{
        type:Number,
        default:1
      },
      loading:{
        default:true
      },
      setCellClass:{
        type:Function
      }
    },
    data() {
      return {
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

</style>
