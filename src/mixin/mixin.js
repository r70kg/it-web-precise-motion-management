export default{
  created(){
    if(typeof this.startInit=='function'){
      this.startInit()
    }
    if(typeof this.getUserInfo=='function'){
      this.getUserInfo()
    }
  },
}

