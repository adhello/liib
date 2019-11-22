<template>
  <div >
    <Header></Header>
    <ElButton type="primary" v-show="!hiddenBtn" v-model="selectValue"
    >搜索</ElButton>
    <el-autocomplete popper-class="my-autocomplete">
      <template slot-scope="{ item }">
        <div class="name">{{ item.query }}</div>
        <span class="addr">{{ item.display_query }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
  import Header from '../components/Header';

  export default {
    name: 'js',
    components: { Header }
  };
</script>

<style scoped>
</style>
