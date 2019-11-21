<template>
  <div CLASS="login-container">
    <Header></Header>
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
  import Header from '../components/Header';
  export default {
    components: { Header },
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


