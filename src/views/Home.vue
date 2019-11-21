<template>
  <div class="home">
    <div  >
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
    <ul >
      <li v-for="o in 10" :key="o" class="text-item">
        <el-row>
            <el-card :body-style="{ padding: '0px' }" style="width: 864px;height: 276px">
              <img src="../image/1.png" class="image">
            </el-card>
        </el-row>
      </li>
    </ul>
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
    },
    methods: {
      load () {
        this.count += 2
      }
    },
    name: 'home',
    components: {}
  }
</script>
<style>
  .text-item{
    list-style: none;
    cursor: pointer;
    margin-left: 25%;
  }

</style>
