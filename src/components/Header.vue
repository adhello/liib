<template>
  <div >
    <div id="nav" >
      <el-menu  class="el-menu-demo" mode="horizontal" id="menu" >
        <el-menu-item index="1" >
          <router-link to="/" >
            <el-image style="width: 68px;height: 60px;padding: 0" :src="url1"></el-image>
          </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
          <router-link to="/about" >首页</router-link>
          </template>
          <el-menu-item index="2-1"><router-link to="/rl" >日历</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="/zm" >走马灯</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link to="/js" >检索</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="3" >
          <router-link to="/home" >Cardlist</router-link>
        </el-menu-item>
        <el-menu-item index="4" >
          <router-link to="/todo" >Todolist</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        url1: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=92a7cba0edcd7b89fd6132d16e4d29c2/1b4c510fd9f9d72a26f9db77df2a2834349bbb3f.jpg'
      }
    }
  };
</script>

<style scoped>

</style>
