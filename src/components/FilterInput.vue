<template>
  <div >
    <input :value="value" @input="input($event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    value:{
      ddefault:''
    }
  },
  data () {
    return {
    }
  },
  methods:{
    input(value){
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
