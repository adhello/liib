<template>
  <div >
    <Header></Header>
    <Zm></Zm>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Zm from '../components/Zm';
  export default {
    name: 'zm',
    components: { Header,Zm }
  };
</script>

<style scoped>
</style>
