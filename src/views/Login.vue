<template>
  <div CLASS="login-container">
   <div class="home">
    <div class="note" :style ="note"></div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    用户登陆<br>
    <el-input v-model="from.username" placeholder="请输入用户名" style="width:200px"></el-input><br>
    <el-input v-model="from.password" placeholder="请输入密码"  show-password style="width:200px"></el-input><br>
    <el-button type="primary" icon="el-icon-edit" @click="handleClick">登录</el-button>
    </el-form>
   </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {},
    data() {
      return {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1',
            url1: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=92a7cba0edcd7b89fd6132d16e4d29c2/1b4c510fd9f9d72a26f9db77df2a2834349bbb3f.jpg'
          }
        },
        from: {
          username: '',
          password: ''
        },
        list: []
      };
    },
    created() {
    },
    methods: {
      handleClick() {
        if (this.from.username === '' || this.from.password === '') {
          this.$message.warning('用户名或密码不能为空！');
        } else if (this.from.username !== '123' || this.from.password !== '123') {
          this.$message.warning('账号或密码错误！');
        } else {
          this.$router.replace('/about');
        }
      }
    }
  };

</script>
<style>
  .text-item{
    list-style: none;
    cursor: pointer;
    width: 50%;
    margin-left: 25%;

  }
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  }
</style>
