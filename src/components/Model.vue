<template>
  <div id="topmodel" v-if="topModelStatus.show" :class="topModelStatus.classname">
    <div>
    <div v-html="topModelStatus.bodyhtml" class="body"></div>
    <div v-html="topModelStatus.closehtml" @click="close" class="close"></div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import C from '@consts'
  export default {
    name: 'modelcoponent',
    props:{

    },
    data(){
      return {

      }
    },
    computed:{
      ...mapState(
        ['topModelStatus']
      )
    },
    methods:{
      close(){
        this[C.CHANGE_TOPMODELSTATUS_COMMIT]({
          show:false
        })
      },
      ...mapMutations([
        C.CHANGE_TOPMODELSTATUS_COMMIT
      ])

    }
  }
</script>

<style lang="scss" scoped>
  #topmodel{
    top:0;
    z-index: 99999;
    position: fixed;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);

  }
</style>
