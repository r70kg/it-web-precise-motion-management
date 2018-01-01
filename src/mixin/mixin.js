export default{
  created(){
    if(typeof this.startInit=='function'){
      this.startInit()
    }
  }
}

