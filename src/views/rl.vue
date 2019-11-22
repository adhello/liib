<template>
  <div >
    <Header></Header>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
  import Header from '../components/Header';
  export default {
    name: 'rl',
    components: { Header }
  };
</script>

<style scoped>
</style>
