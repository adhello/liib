<template>
  <div >
    <Header></Header>
    <Cardlist></Cardlist>
  </div>
</template>

<script>

  import Header from '@/components/Header';
  import Cardlist from '@/components/Cardlist';

  export default {
    name: 'home',
    components: { Cardlist, Header },
  }
</script>
<style>
</style>
