<template>
  <div CLASS="login-container" >
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
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  }
</style>
