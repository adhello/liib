<template>
  <div CLASS="login-container">
    <div id="nav" >
      <el-menu  class="el-menu-demo" mode="horizontal" id="menu" @select="handleSelect">
        <el-menu-item index="1" >
          <router-link to="/" >
            <el-image style="width: 68px;height: 60px;padding: 0" :src="url1"></el-image>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2" >
          <router-link to="/about" >首页</router-link>
        </el-menu-item>
        <el-menu-item index="3" >
          <router-link to="/home" >Cardlist</router-link>
        </el-menu-item>
        <el-menu-item index="4" >
          <router-link to="/todo" >Todolist</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <el-autocomplete popper-class="my-autocomplete">
      <template slot-scope="{ item }">
        <div class="name">{{ item.query }}</div>
        <span class="addr">{{ item.display_query }}</span>
      </template>
    </el-autocomplete>
    <ElButton type="primary" v-show="!hiddenBtn" v-model="selectValue"
    >搜索</ElButton>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        url1: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=92a7cba0edcd7b89fd6132d16e4d29c2/1b4c510fd9f9d72a26f9db77df2a2834349bbb3f.jpg'
      }
    }

  };
</script>

<style>
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  }
</style>


