<template>
  <div id="app" style="overflow:auto"  CLASS="login-container">
    <div id="nav" >
          <router-link to="/" >
          </router-link><router-view/>
    </div>
  </div>
</template>

<script>
  export default {

  };

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: grey;
    text-decoration: none;

    &.router-link-exact-active {
      color: black;
      text-align: center;
    }
  }
}
#menu {
    margin-left: 25%;
    width: 50%;
  }
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
}
</style>
