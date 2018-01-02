<template>
  <div id="login">
    <div class="inputinfo">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input type="password" v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="password">
          <el-input v-model.number="ruleForm2.password"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {login} from '@services'
  import  C from '@consts'
  export default {
    name: 'login',
    data () {
      const validateName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      return {
        ruleForm2: {
          name: 'weixiaoyi',
          password: 'weixiaoyi'
        },
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },

    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      async login(){
        const res=await login({body:{name:this.ruleForm2.name,password:this.ruleForm2.password}})
        if(this.$ISRESOK(res)){
          this[C.CHANGE_PERSONINFO_COMMIT](res)
          this.$router.push(this.$route.query.redirect||{name:'userslist'})
        }
      },
      ...mapMutations([
        C.CHANGE_PERSONINFO_COMMIT
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #login{
    height:100%;
    background-image: url('../../assets/bg_login1.png');
    background-size: cover;
    display:flex;
    justify-content: flex-end;
  }

</style>
