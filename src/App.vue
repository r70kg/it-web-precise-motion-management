<template>
  <div id="app">
    <router-view/>
    <Model></Model>
  </div>
</template>

<script>
  import {Model} from '@components'
export default {
  name: 'app',
  components:{Model}
}
</script>

<style>
  /*@font-face {*/
    /*font-family: 'iconfont';  !* project id 527520 *!*/
    /*src: url('//at.alicdn.com/t/font_527520_3dq1poo47sao47vi.eot');*/
    /*src: url('//at.alicdn.com/t/font_527520_3dq1poo47sao47vi.eot?#iefix') format('embedded-opentype'),*/
    /*url('//at.alicdn.com/t/font_527520_3dq1poo47sao47vi.woff') format('woff'),*/
    /*url('//at.alicdn.com/t/font_527520_3dq1poo47sao47vi.ttf') format('truetype'),*/
    /*url('//at.alicdn.com/t/font_527520_3dq1poo47sao47vi.svg#iconfont') format('svg');*/
  /*}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #8597A1;
  font-size: 0.18rem;
  width:100%;
}


</style>
